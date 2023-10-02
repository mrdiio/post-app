'use client'
import FormPost from '@/components/FormPost'
import { getPost, updatePost } from '@/services/postService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export default function Edit({ params }) {
  const router = useRouter()
  const { data } = useQuery(['post', params.id], () => getPost(params.id), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })

  const { mutate, isLoading: updating } = useMutation(
    (values) => updatePost(params.id, values),
    {
      onSuccess: () => {
        router.back()
        router.refresh()
      },
      onError: (error) => {
        console.log(error)
      },
    }
  )

  return (
    <main className="py-10">
      <h1 className="text-4xl font-semibold text-center pb-10">Update Post</h1>

      <div className="container max-w-lg mx-auto">
        {data && (
          <FormPost
            submit={mutate}
            isEditing={true}
            defaultValues={data}
            submitLoading={updating}
          />
        )}
      </div>
    </main>
  )
}
