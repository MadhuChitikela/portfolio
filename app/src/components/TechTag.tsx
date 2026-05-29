interface TechTagProps {
  label: string
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block bg-[rgba(124,111,167,0.08)] text-accent-violet text-xs font-mono tracking-wide px-2.5 py-1 rounded-md">
      {label}
    </span>
  )
}
