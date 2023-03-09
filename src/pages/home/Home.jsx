import './home.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import FeaturedMovie from '../../components/featuredMovie/FeaturedMovie.jsx'
import List from '../../components/list/List.jsx'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie />
      <List />
      <List />
      <List />
      <List />
      </div>
  )
}

export default Home