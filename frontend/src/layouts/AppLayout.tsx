import { Outlet } from 'react-router-dom'
import CartDrawer from '../components/CartDrawer/CartDrawer'
import PageAnimations from '../components/PageAnimations/PageAnimations'

function AppLayout() {
  return (
    <>
      <Outlet />
      <PageAnimations />
      <CartDrawer />
    </>
  )
}

export default AppLayout
