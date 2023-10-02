'use client'
import FormPost from '@/components/FormPost'
import { storePost } from '@/services/postService'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()

  const { mutate, isLoading } = useMutation((values) => storePost(values), {
    onSuccess: () => {
      router.push(`/`)
      router.refresh()
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return (
    <main className="py-10">
      <h1 className="text-4xl font-semibold text-center pb-10">Add New Post</h1>

      <div className="container max-w-lg mx-auto">
        <FormPost submit={mutate} submitLoading={isLoading} />
      </div>
    </main>
  )
}
