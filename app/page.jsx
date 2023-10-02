import { Button } from '@/components/ui/button'
import PostsCard from '@/components/PostsCard'
import getQueryClient from '@/lib/react-query/getQueryClient'
import Hydrate from '@/lib/react-query/hydratedClient'
import { getPosts } from '@/services/postService'
import { dehydrate } from '@tanstack/react-query'

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['posts'], getPosts)
  const dehydratedState = dehydrate(queryClient)

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

      <div className="grid md:grid-cols-3 gap-4">
        <Hydrate state={dehydratedState}>
          <PostsCard />
        </Hydrate>
      </div>
    </section>
  )
}
