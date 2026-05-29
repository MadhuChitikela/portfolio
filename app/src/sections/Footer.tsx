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
        <p className="caption-text text-text-muted hidden sm:block">
          AI/ML Engineer &middot; Visakhapatnam, India
        </p>
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
