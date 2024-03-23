import { API_REQUEST } from '~/utils/constant'

export const getBoardsApi = async () => {
  const response = await API_REQUEST.get(`/board`)
  return response.data
}

export const getBoardApi = async boardId => {
  const response = await API_REQUEST.get(`/board/${boardId}`)
  return response.data
}

export const createBoardApi = async data => {
  const response = await API_REQUEST.post(`/board`, data)
  return response.data
}

export const updateBoardApi = async data => {
  const response = await API_REQUEST.patch(`/board/${data._id}`, data)
  return response.data
}

export const deleteBoardApi = async data => {
  const response = await API_REQUEST.delete(`/board/${data._id}`)
  return response.data
}
