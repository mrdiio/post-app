import axios from 'axios'

export const getTags = async () => {
  const res = await axios.get('http://localhost:3000/api/tags')
  return res.data
}
