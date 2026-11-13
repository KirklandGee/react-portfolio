'use client'

/**
 * SketchHeading — a confident serif heading whose underline draws itself in
 * on mount, fast (~550ms), like a pen marking the line. Pairs with the
 * monospace "memo" label above it. This is the headline whimsy moment the
 * brief asked for: quick, not gimmicky, runs once.
 */
export default function SketchHeading({
  children,
  as: Tag = 'h2',
  className = '',
  underline = false,
}: {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  underline?: boolean
}) {
  return (
    <Tag className={`font-serif ink-reveal ${className}`}>
      {underline ? <span className="sketch-underline">{children}</span> : children}
    </Tag>
  )
}
