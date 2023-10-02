import FormPost from '@/components/FormPost'
import getQueryClient from '@/lib/react-query/getQueryClient'
import Hydrate from '@/lib/react-query/hydratedClient'
import { getTags } from '@/services/tagService'
import { dehydrate } from '@tanstack/react-query'

export default async function Create({ props }) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['tags'], getTags)
  const dehydratedState = dehydrate(queryClient)

  return (
    <main className="py-10">
      <h1 className="text-4xl font-semibold text-center pb-10">Add New Post</h1>

      <div className="container max-w-lg mx-auto">
        <Hydrate state={dehydratedState}>
          <FormPost />
        </Hydrate>
      </div>
    </main>
  )
}
