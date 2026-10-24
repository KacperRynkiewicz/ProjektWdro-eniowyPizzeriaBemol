import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import PageFooter from '../components/PageFooter/PageFooter'

function PageLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-surface-dark">
      <Header variant="light" />
      <main className="flex-1">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  )
}

export default PageLayout
