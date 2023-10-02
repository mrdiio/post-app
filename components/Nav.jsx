import Image from 'next/image'
import { ModeToggle } from './ui/mode-toggle'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Nav() {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between">
        <Link className="flex place-items-center gap-2" href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
            style={{ width: 100, height: 24 }}
          />
        </Link>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button asChild>
            <Link href="/posts/create">Create Post</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
