interface StatBlockProps {
  number: string
  label: string
}

export default function StatBlock({ number, label }: StatBlockProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[2.5rem] font-light tracking-tight leading-none text-accent-amber">
        {number}
      </span>
      <span className="caption-text text-text-muted">
        {label}
      </span>
    </div>
  )
}
