import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//page
import SignIn from './pages/Auth/SignIn'
import SignUp from './pages/Auth/SignUp'
import Profile from './pages/Users'
import Boards from '~/pages/Boards'
import Board from '~/pages/Boards/_id'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Boards />,
  },
  {
    path: '/auth/signin',
    element: <SignIn />,
  },
  {
    path: '/auth/signup',
    element: <SignUp />,
  },
  {
    path: '/board/:id',
    element: <Board />,
  },
  {
    path: '/user/:id',
    element: <Profile />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
