import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SPHERE_RADIUS = 1.8
const NODE_COUNT = 120
const INNER_NODE_COUNT = 15
const CONNECTION_THRESHOLD = 1.2

function fibonacciSphere(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  const phi = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = phi * i
    const x = Math.cos(theta) * r
    const z = Math.sin(theta) * r
    points.push(new THREE.Vector3(x * radius, y * radius, z * radius))
  }
  return points
}

function randomInnerPoints(count: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = []
  for (let i = 0; i < count; i++) {
    const u = Math.random()
    const v = Math.random()
    const theta = 2 * Math.PI * u
    const phi = Math.acos(2 * v - 1)
    const r = Math.cbrt(Math.random()) * radius * 0.6
    points.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )
    )
  }
  return points
}

function NeuralNetwork({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const surfaceNodesRef = useRef<THREE.InstancedMesh>(null)
  const innerNodesRef = useRef<THREE.InstancedMesh>(null)
  const linesRef = useRef<THREE.LineSegments>(null)
  const coreLinesRef = useRef<THREE.LineSegments>(null)
  const timeRef = useRef(0)

  const surfacePositions = useMemo(() => fibonacciSphere(NODE_COUNT, SPHERE_RADIUS), [])
  const innerPositions = useMemo(() => randomInnerPoints(INNER_NODE_COUNT, SPHERE_RADIUS), [])

  // Build connection indices
  const { linePositions, coreLinePositions } = useMemo(() => {
    const connections: number[] = []
    const coreConnections: number[] = []
    const corePos = new THREE.Vector3(0, 0, 0)

    // Surface-to-surface connections
    for (let i = 0; i < surfacePositions.length; i++) {
      for (let j = i + 1; j < surfacePositions.length; j++) {
        if (surfacePositions[i].distanceTo(surfacePositions[j]) < CONNECTION_THRESHOLD) {
          connections.push(
            surfacePositions[i].x, surfacePositions[i].y, surfacePositions[i].z,
            surfacePositions[j].x, surfacePositions[j].y, surfacePositions[j].z
          )
        }
      }
    }

    // Surface-to-core connections
    for (let i = 0; i < surfacePositions.length; i++) {
      coreConnections.push(
        surfacePositions[i].x, surfacePositions[i].y, surfacePositions[i].z,
        corePos.x, corePos.y, corePos.z
      )
    }

    // Inner-to-core connections
    for (let i = 0; i < innerPositions.length; i++) {
      coreConnections.push(
        innerPositions[i].x, innerPositions[i].y, innerPositions[i].z,
        corePos.x, corePos.y, corePos.z
      )
    }

    return {
      linePositions: new Float32Array(connections),
      coreLinePositions: new Float32Array(coreConnections),
    }
  }, [surfacePositions, innerPositions])

  // Initialize instance matrices
  useEffect(() => {
    if (surfaceNodesRef.current) {
      const dummy = new THREE.Object3D()
      surfacePositions.forEach((pos, i) => {
        dummy.position.copy(pos)
        dummy.scale.set(1, 1, 1)
        dummy.updateMatrix()
        surfaceNodesRef.current!.setMatrixAt(i, dummy.matrix)
      })
      surfaceNodesRef.current.instanceMatrix.needsUpdate = true
    }

    if (innerNodesRef.current) {
      const dummy = new THREE.Object3D()
      innerPositions.forEach((pos, i) => {
        dummy.position.copy(pos)
        dummy.scale.set(0.6, 0.6, 0.6)
        dummy.updateMatrix()
        innerNodesRef.current!.setMatrixAt(i, dummy.matrix)
      })
      innerNodesRef.current.instanceMatrix.needsUpdate = true
    }
  }, [surfacePositions, innerPositions])

  useFrame((_, delta) => {
    timeRef.current += delta
    const t = timeRef.current

    if (groupRef.current) {
      // Continuous rotation
      groupRef.current.rotation.y += 0.001
      groupRef.current.rotation.x += 0.0005

      // Mouse response (subtle parallax)
      const targetX = mousePos.current.y * 0.15
      const targetY = mousePos.current.x * 0.15
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x * 0.1) * 0.05
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y * 0.1) * 0.05
    }

    // Core pulse
    if (coreRef.current) {
      const material = coreRef.current.material as THREE.MeshStandardMaterial
      const pulse = 0.6 + 0.2 * Math.sin(t * 1.5)
      material.emissiveIntensity = pulse
    }

    // Node twinkling
    if (surfaceNodesRef.current) {
      const material = surfaceNodesRef.current.material as THREE.MeshStandardMaterial
      const twinkle = 0.6 + 0.3 * Math.sin(t * 2) * Math.sin(t * 3.7)
      material.emissiveIntensity = twinkle
    }
  })

  const nodeGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.04, 1), [])
  const coreGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.08, 2), [])

  return (
    <group ref={groupRef}>
      {/* Core node */}
      <mesh ref={coreRef} geometry={coreGeometry}>
        <meshStandardMaterial
          color="#C4956A"
          emissive="#C4956A"
          emissiveIntensity={0.8}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Surface nodes */}
      <instancedMesh
        ref={surfaceNodesRef}
        args={[nodeGeometry, undefined, NODE_COUNT]}
      >
        <meshStandardMaterial
          color="#D4953A"
          emissive="#D4953A"
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.7}
        />
      </instancedMesh>

      {/* Inner nodes */}
      <instancedMesh
        ref={innerNodesRef}
        args={[nodeGeometry, undefined, INNER_NODE_COUNT]}
      >
        <meshStandardMaterial
          color="#7C6FA7"
          emissive="#7C6FA7"
          emissiveIntensity={0.4}
          roughness={0.3}
          metalness={0.7}
        />
      </instancedMesh>

      {/* Surface connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#D4953A"
          transparent
          opacity={0.15}
          linewidth={1}
        />
      </lineSegments>

      {/* Core connection lines */}
      <lineSegments ref={coreLinesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[coreLinePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7C6FA7"
          transparent
          opacity={0.08}
          linewidth={1}
        />
      </lineSegments>
    </group>
  )
}

export default function NeuralSphereCanvas() {
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} color="#FFF8F0" />
        <directionalLight position={[3, 3, 5]} intensity={1.0} color="#FFFFFF" />
        <pointLight position={[-3, -2, 4]} intensity={0.4} color="#D4953A" />
        <NeuralNetwork mousePos={mousePos} />
      </Canvas>
    </div>
  )
}
