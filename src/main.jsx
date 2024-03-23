import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '~/App.jsx'

//mui
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'

//theme
import theme from '~/theme.js'

//toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

//dialog
import { ConfirmProvider } from 'material-ui-confirm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <Provider store={store}>
        <ConfirmProvider
          defaultOptions={{
            allowClose: true,
            dialogProps: { maxWidth: 'xs' },
            cancellationButtonProps: { color: 'inherit' },
            confirmationButtonProps: { color: 'secondary', vairiant: 'outlined' },
          }}
        >
          <CssBaseline />
          <App />
          <ToastContainer />
        </ConfirmProvider>
      </Provider>
    </CssVarsProvider>
  </React.StrictMode>,
)
