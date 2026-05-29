import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-border-subtle"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '2rem var(--page-padding-x)',
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-secondary text-center sm:text-left font-sans tracking-wide">
          Copyright © 2026 Madhu Chitikela. Built with React + Three.js Library
        </p>
        <div className="flex items-center gap-2 px-3.5 py-1 bg-accent-amber/5 border border-accent-amber/15 rounded-full shadow-[0_2px_8px_rgba(212,149,58,0.03)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-amber"></span>
          </span>
          <p className="text-[0.75rem] text-text-secondary font-medium tracking-wide">
            AI/ML Engineer &middot; Visakhapatnam, India
          </p>
        </div>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 caption-text text-text-muted hover:text-text-secondary transition-colors"
        >
          Deployed on Vercel
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </footer>
  )
}
