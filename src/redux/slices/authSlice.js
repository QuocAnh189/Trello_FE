import { createSlice } from '@reduxjs/toolkit'

export const AuthSliceKey = 'auth'

const initialState = {
  authData: 'haha',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.authData = action.payload
    },

    signUp: (state, action) => {
      state.authData = action.payload
    },

    signOut: state => {
      state.authData = undefined
    },
  },
})

export const { signUp, signIn, signOut } = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer
