import Link from 'next/link'

export default function NotesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[44rem] px-6 sm:px-10 pt-7 pb-16">
      <Link href="/" className="pen-link text-[1.05rem]">
        Kirkland Gee
      </Link>
      {children}
    </div>
  )
}
