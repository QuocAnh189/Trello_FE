import { API_REQUEST } from '~/utils/constant'

export const getCommentsApi = async () => {
  const response = await API_REQUEST.get(`/comment`)
  return response.data
}

export const getCommentApi = async commentId => {
  const response = await API_REQUEST.get(`/comment/${commentId}`)
  return response.data
}

export const createCommentApi = async data => {
  const response = await API_REQUEST.post(`/comment`, data)
  return response.data
}

export const updateCommentApi = async data => {
  const response = await API_REQUEST.patch(`/comment/${data._id}`, data)
  return response.data
}

export const deleteCommentApi = async data => {
  const response = await API_REQUEST.delete(`/comment/${data._id}`)
  return response.data
}
