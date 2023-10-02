import { Button } from '@/components/ui/button'
import Nav from '../components/Nav'
import PostCard from '@/components/PostCard'

export default function Home() {
  return (
    <section className="py-20 flex flex-col gap-10">
      <div className=" mb-10 flex flex-col items-center text-center gap-10">
        <h1 className="text-4xl font-bold">Shadcn is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Magna duis consectetur in non voluptate aliquip do amet laboris id do.
        </p>
        <div className="flex gap-6 justify-center items-center">
          <Button variant="secondary">Learn More</Button>
          <Button>Enroll Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  )
}
