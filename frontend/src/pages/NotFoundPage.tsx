import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-bold">Nie znaleziono strony</h1>
      <Link className="text-lime-700 underline underline-offset-4" to="/">
        Wróć na stronę główną
      </Link>
    </main>
  )
}

export default NotFoundPage
