import './featuredMovie.scss'
import { PlayArrow, InfoOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const FeaturedMovie = ({ type }) => {

  const [ content, setContent ] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThlMzJjM2RlYzI2M2IwNzMwZjU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTc2ODgxMSwiZXhwIjoxNjgwMjAwODExfQ.u0udN9ucvlN2-OzwMllypjiJiOO_Cg6IB-8FWFgwPdk" ,
          },
        });
        setContent(res.data[0])
      } catch (err) {
          console.log(err)        
      }
    }
    getRandomContent()
  }, [type])
  console.log(content)

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === 'movies' ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img 
        width={'100%'}
        src={content.img} 
        alt="" />
        <div className="info">
          <img 
          src={content.imgTitle} 
          alt="" />
          <span className="description">{content.desc}</span>
          <div className="buttons">
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined />
              <span>More Info</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default FeaturedMovie