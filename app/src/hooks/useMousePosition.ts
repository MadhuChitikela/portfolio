import { useState, useEffect, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
  normalizedX: number
  normalizedY: number
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  })
  const rafRef = useRef<number | null>(null)
  const pendingRef = useRef<{ x: number; y: number; normalizedX: number; normalizedY: number } | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -(e.clientY / window.innerHeight) * 2 + 1
      pendingRef.current = { x: e.clientX, y: e.clientY, normalizedX: nx, normalizedY: ny }

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          if (pendingRef.current) {
            setPosition(pendingRef.current)
            pendingRef.current = null
          }
          rafRef.current = null
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return position
}
