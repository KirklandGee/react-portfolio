'use client'

const CAL = 'https://cal.com/kirkland-gee-4vhn4z'
const DOW = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

export default function JournalCal() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const start = new Date(year, month, 1).getDay()
  const label = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const talk = new Date(now)
  const add = (3 - now.getDay() + 7) % 7
  talk.setDate(now.getDate() + (add === 0 ? 7 : add))
  const talkDay = talk.getMonth() === month ? talk.getDate() : Math.min(now.getDate() + 2, daysInMonth)

  const cells: (number | null)[] = [...Array(start).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)]

  return (
    <a href={CAL} target="_blank" rel="noopener noreferrer" className="cal group block">
      <div className="cal-head">
        <span className="hand text-[1.35rem]">{label}</span>
        <span className="hand text-[1.15rem] text-pen group-hover:underline">book a time →</span>
      </div>
      <div className="cal-grid">
        {DOW.map((d, i) => (
          <span key={`${d}${i}`} className="cal-dow">
            {d}
          </span>
        ))}
        {cells.map((day, i) =>
          day ? (
            <span key={i} className={`cal-day${day === talkDay ? ' is-talk' : ''}`}>
              {day}
            </span>
          ) : (
            <span key={i} />
          )
        )}
      </div>
    </a>
  )
}
