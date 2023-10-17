import { ModeToggle } from './ui/mode-toggle'
import Link from 'next/link'
import { Button } from './ui/button'
import { BookOpen } from 'lucide-react'

export default async function Nav() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between">
        <Link className="flex place-items-center gap-2" href="/">
          <BookOpen size={36} />
          <span className="text-xl font-mono font-bold tracking-widest">
            Posts
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button asChild>
            <Link href="/posts/create">Create Post</Link>
          </Button>
          {/* <Button asChild>
            <Link href="/api/auth/signout">Sign Out</Link>
          </Button> */}
          <Button asChild>
            <Link href="/api/auth/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
