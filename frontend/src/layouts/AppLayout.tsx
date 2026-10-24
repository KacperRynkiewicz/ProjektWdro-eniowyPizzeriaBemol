import { Outlet } from 'react-router-dom'
import CartDrawer from '../components/CartDrawer'

function AppLayout() {
  return (
    <>
      <Outlet />
      <CartDrawer />
    </>
  )
}

export default AppLayout
