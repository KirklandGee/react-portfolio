import type { CSSProperties, ReactNode } from 'react'

type Kind = 'underline' | 'circle' | 'double' | 'highlight' | 'strike'

const PATHS: Record<Kind, { d: string; viewBox: string; style: CSSProperties; width: number }> = {
  // a quick pen stroke under a word
  underline: {
    d: 'M2 8.2C64 7.8 128 8.3 198 7.9',
    viewBox: '0 0 200 12',
    style: { left: '-2%', width: '104%', bottom: '-0.06em', height: '0.22em' },
    width: 2.2,
  },
  // two strokes, the second a little lazier
  double: {
    d: 'M3 6.5C52 3.4 120 2.6 197 5.2M14 13.2c44-2.2 104-3 172-1.4',
    viewBox: '0 0 200 16',
    style: { left: '-3%', width: '106%', bottom: '-0.42em', height: '0.5em' },
    width: 2.6,
  },
  // a slightly crooked line through a word, like a notebook edit
  strike: {
    d: 'M2 8.4C48 6.2 118 10.1 198 7',
    viewBox: '0 0 200 16',
    style: { left: '-4%', width: '108%', top: '0.42em', height: '0.28em' },
    width: 2.6,
  },
  // a highlighter swipe behind the words, a bit uneven like a real one
  highlight: {
    d: 'M3 11.5C48 9.6 104 10.2 150 9.4c18-.3 33 .4 47 1.3',
    viewBox: '0 0 200 20',
    style: { left: '-2%', width: '104%', top: '0.08em', height: '1em', zIndex: -1 },
    width: 15,
  },
  // loose loop around a phrase, overshooting where it closes
  circle: {
    d: 'M118 6.5C64 2.4 9 9.6 6.2 28.6 3.8 45 52 55.8 108 54.4c55-1.4 91-11.8 89.2-28.6C195.4 9.8 150 2.6 86 7.4',
    viewBox: '0 0 200 60',
    style: { left: '-28%', width: '156%', top: '-0.38em', height: 'calc(100% + 0.76em)' },
    width: 2.4,
  },
}

/** Wraps words in a pen mark that draws itself in when its page comes up. */
export function Scribble({
  children,
  kind = 'underline',
  delay,
}: {
  children: ReactNode
  kind?: Kind
  delay?: number
}) {
  const p = PATHS[kind]
  return (
    <span className={`scribble-wrap${kind === 'highlight' ? ' is-highlight' : ''}${kind === 'strike' ? ' is-strike' : ''}`} style={delay ? ({ ['--d' as string]: `${delay}s` } as CSSProperties) : undefined}>
      {children}
      <svg className="scribble" viewBox={p.viewBox} preserveAspectRatio="none" style={p.style} aria-hidden="true">
        <path
          d={p.d}
          pathLength={1}
          strokeWidth={p.width}
          vectorEffect={kind === 'highlight' ? undefined : 'non-scaling-stroke'}
        />
      </svg>
    </span>
  )
}

/** A struck word with the correction written in beside it. */
export function Edit({
  from,
  to,
  delay = 0.2,
}: {
  from: ReactNode
  to: ReactNode
  delay?: number
}) {
  return (
    <>
      <Scribble kind="strike" delay={delay}>
        {from}
      </Scribble>{' '}
      <HandNote rotate={-5} delay={delay + 0.28}>
        {to}
      </HandNote>
    </>
  )
}

/** A note in red pen, written in left to right when its page comes up. */
export function HandNote({
  children,
  className = '',
  rotate = -3,
  delay,
}: {
  children: ReactNode
  className?: string
  rotate?: number
  delay?: number
}) {
  return (
    <span
      className={`hand write-in ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...(delay ? { ['--d' as string]: `${delay}s` } : {}) } as CSSProperties}
    >
      {children}
    </span>
  )
}

/** A hand-drawn arrow, drawn in with the notes. */
export function PenArrow({ className = '', d, viewBox = '0 0 120 60', delay }: { className?: string; d?: string; viewBox?: string; delay?: number }) {
  return (
    <svg
      className={`scribble ${className}`}
      viewBox={viewBox}
      aria-hidden="true"
      style={{ position: 'static', ...(delay ? { ['--d' as string]: `${delay}s` } : {}) } as CSSProperties}
    >
      <path d={d ?? 'M6 12C30 6 70 10 92 34M80 36l13 0 1-13'} pathLength={1} strokeWidth={2.4} />
    </svg>
  )
}
