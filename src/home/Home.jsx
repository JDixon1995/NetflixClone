import './home.scss'
import Navbar from '../components/navbar/Navbar.jsx'
import FeaturedMovie from '../components/featuredMovie/FeaturedMovie'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie />
      </div>
  )
}

export default Home