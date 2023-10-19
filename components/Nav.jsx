import { ModeToggle } from './ui/mode-toggle'
import Link from 'next/link'
import { Button } from './ui/button'
import { BookOpen } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Nav() {
  const session = await getServerSession(authOptions)

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
          {session ? (
            <Button asChild variant={'destructive'}>
              <Link href="/api/auth/signout">Logout</Link>
            </Button>
          ) : (
            <Button asChild variant={'secondary'}>
              <Link href="/api/auth/signin">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
