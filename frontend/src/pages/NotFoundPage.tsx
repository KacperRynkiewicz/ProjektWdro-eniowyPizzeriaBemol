import './NotFoundPage.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="not-found">
      <h1 className="not-found__title">Nie znaleziono strony</h1>
      <Link className="not-found__link" to="/">
        Wróć na stronę główną
      </Link>
    </main>
  )
}

export default NotFoundPage
