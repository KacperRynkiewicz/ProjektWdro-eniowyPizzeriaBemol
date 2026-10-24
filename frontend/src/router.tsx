import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MenuPage from './pages/MenuPage'
import PageLayout from './layouts/PageLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AppLayout from './layouts/AppLayout'
import CartPage from './pages/CartPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        element: <PageLayout />,
        children: [
          {
            path: '/koszyk',
            element: <CartPage />,
          },
          {
            path: '/kontakt',
            element: <ContactPage />,
          },
          {
            path: '/o-nas',
            element: <AboutPage />,
          },
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
    ],
  },
])
