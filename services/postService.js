import axios from 'axios'

export const getPosts = async () => {
  const res = await axios.get('http://localhost:3000/api/posts')
  return res.data
}

export const getPost = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/posts/${id}`)
  return res.data
}

export const storePost = async (data) => {
  const res = await axios.post('http://localhost:3000/api/posts', data)
  return res.data
}

export const updatePost = async (id, data) => {
  const res = await axios.patch(`http://localhost:3000/api/posts/${id}`, data)
  return res.data
}

export const deletePost = async (id) => {
  const res = await axios.delete(`http://localhost:3000/api/posts/${id}`)
  return res.data
}
