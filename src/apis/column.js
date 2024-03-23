import { API_REQUEST } from '~/utils/constant'

export const getColumnsApi = async () => {
  const response = await API_REQUEST.get(`/column`)
  return response.data
}

export const getColumnApi = async columnId => {
  const response = await API_REQUEST.get(`/column/${columnId}`)
  return response.data
}

export const createColumnApi = async data => {
  const response = await API_REQUEST.post(`/column`, data)
  return response.data
}

export const updateColumnApi = async data => {
  const response = await API_REQUEST.patch(`/column/${data._id}`, data)
  return response.data
}

export const deleteColumnApi = async data => {
  const response = await API_REQUEST.delete(`/column/${data._id}`)
  return response.data
}
