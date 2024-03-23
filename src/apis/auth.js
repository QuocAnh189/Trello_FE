import { API_REQUEST } from '~/utils/constant'

export const signIn = async data => {
  const response = await API_REQUEST.post(`/signin`, data)
  return response.data
}

export const signUp = async data => {
  const response = await API_REQUEST.post(`/signup`, data)
  return response.data
}

export const signOut = async id => {
  const response = await API_REQUEST.post(`/signout`, data)
  return response.data
}

export const forgorPassword = async data => {
  const response = await API_REQUEST.post(`/forgot-password`)
  return response.data
}

export const resetPassword = async data => {
  const response = await API_REQUEST.post(`/reset-password`)
  return response.data
}
