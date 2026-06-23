import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <h1>Practicos de Processing</h1>
      <Link className="route-button" to="/practico-6">
        Ir al practico 6
      </Link>
      <Link className="route-button" to="/practico-7">
        Ir al practico 7
      </Link>
    </main>
  )
}

export default Home
