import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MenuPage from './pages/MenuPage'
import PageLayout from './layouts/PageLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <PageLayout />,
    children: [
      {
        path: '/menu',
        element: <MenuPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
