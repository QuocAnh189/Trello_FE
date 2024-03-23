import axios from 'axios'
export const BASE_URL = 'http://localhost:4000'

export const API_REQUEST = axios.create({ baseURL: `${BASE_URL}/api`, headers: { 'Content-Type': 'application/json' } })
