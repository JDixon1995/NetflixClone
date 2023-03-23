import './home.scss'
import Navbar from '../../components/navbar/Navbar.jsx'
import FeaturedMovie from '../../components/featuredMovie/FeaturedMovie.jsx'
import List from '../../components/list/List.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({ type }) => {

  const [ lists, setLists ] = useState([])
  const [ genre, setGenre ] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type && '?type=' + type}&${genre && 'genre=' + genre}`)
          setLists(res.data)
          console.log(lists)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <FeaturedMovie type={type} />
      <List />
      <List />
      <List />
      <List />
      </div>
  )
}

export default Home