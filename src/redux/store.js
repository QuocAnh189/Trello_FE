import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//api
import { apiAuth } from './services/authApi'
import { apiBoard } from './services/boardApi'
import { apiCard } from './services/cardApi'
import { apiColumn } from './services/columnApi'
import { apiComment } from './services/commentApi'
import { apiUser } from './services/userApi'

//slices
import authReducer, { AuthSliceKey } from './slices/authSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [AuthSliceKey],
  blacklist: [],
}

const combinedReducer = combineReducers({
  [AuthSliceKey]: authReducer,

  [apiAuth.reducerPath]: apiAuth.reducer,
  [apiBoard.reducerPath]: apiBoard.reducer,
  [apiColumn.reducerPath]: apiColumn.reducer,
  [apiCard.reducerPath]: apiCard.reducer,
  [apiComment.reducerPath]: apiComment.reducer,
  [apiUser.reducerPath]: apiUser.reducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/signOut') {
    state.auth = undefined
  }

  return combinedReducer(state, action)
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'socket/createSocket',
          'apiAuth/executeMutation/fulfilled',
        ],
        ignoredActionPaths: ['socket.socket', 'payload', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.response'],
        ignoredPaths: ['socket', 'meta.baseQueryMeta.request', 'meta.baseQueryMeta.respone'],
      },
      immutableCheck: {
        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two', 'items.data'],
      },
    }).concat([
      apiAuth.middleware,
      apiBoard.middleware,
      apiCard.middleware,
      apiColumn.middleware,
      apiComment.middleware,
      apiUser.middleware,
    ]),
})

setupListeners(store.dispatch)

export default store

export const persistor = persistStore(store)
