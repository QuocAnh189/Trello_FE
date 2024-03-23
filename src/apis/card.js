import { API_REQUEST } from '~/utils/constant'

export const getCardsApi = async () => {
  const response = await API_REQUEST.get(`/card`)
  return response.data
}

export const getCardApi = async cardId => {
  const response = await API_REQUEST.get(`/card/${cardId}`)
  return response.data
}

export const createCardApi = async data => {
  const response = await API_REQUEST.post(`/card`, data)
  return response.data
}

export const updateCardApi = async data => {
  const response = await API_REQUEST.patch(`/card/${data._id}`, data)
  return response.data
}

export const deleteCardApi = async data => {
  const response = await API_REQUEST.delete(`/card/${data._id}`)
  return response.data
}
