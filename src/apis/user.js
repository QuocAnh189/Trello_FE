import { API_REQUEST } from '~/utils/constant'

export const getUsersApi = async () => {
  const response = await API_REQUEST.get(`/user`)
  return response.data
}

export const getUserApi = async userId => {
  const response = await API_REQUEST.get(`/user/${userId}`)
  return response.data
}

export const createUserApi = async data => {
  const response = await API_REQUEST.post(`/user`, data)
  return response.data
}

export const updateUserApi = async data => {
  const response = await API_REQUEST.patch(`/user/${data._id}`, data)
  return response.data
}

export const deleteUserApi = async data => {
  const response = await API_REQUEST.delete(`/user/${data._id}`)
  return response.data
}
