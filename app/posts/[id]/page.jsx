import getQueryClient from '@/lib/react-query/getQueryClient'
import DetailPost from './Detail'
import { dehydrate } from '@tanstack/react-query'
import Hydrate from '@/lib/react-query/hydratedClient'
import { getPost } from '@/services/postService'
import BackButton from '@/components/BackButton'

export default async function PostDetail({ params }) {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['post', params.id], () => getPost(params.id))
  const dehydratedState = dehydrate(queryClient)

  return (
    <div className="py-12 flex flex-col gap-6">
      <BackButton />
      <Hydrate state={dehydratedState}>
        <DetailPost id={params.id} />
      </Hydrate>
    </div>
  )
}
