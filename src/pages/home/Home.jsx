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
          `lists${type ? '?type=' + type : ''}${genre ? '&genre=' + genre : ''}`,
          {
            headers: {
    "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThlMzJjM2RlYzI2M2IwNzMwZjU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTc2ODgxMSwiZXhwIjoxNjgwMjAwODExfQ.u0udN9ucvlN2-OzwMllypjiJiOO_Cg6IB-8FWFgwPdk" 
            }
          })
          setLists(res.data)
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
      {lists.map((list) => (
        <List list={list} />
      ))}
      <List />
      </div>
  )
}

export default Home