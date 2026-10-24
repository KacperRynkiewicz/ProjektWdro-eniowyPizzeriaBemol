import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MenuPage from './pages/MenuPage'
import PageLayout from './layouts/PageLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    element: <PageLayout />,
    children: [
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
])
