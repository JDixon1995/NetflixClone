import './listItem.scss'
import { PlayArrow, Add, ThumbUp, ThumbDown } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const ListItem = ({ index, item }) => {

  const [ isHovered, setIsHovered ] = useState(false)
  const [ movie, setMovie ] = useState({})
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers : {
            "token" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MThlMzJjM2RlYzI2M2IwNzMwZjU4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3OTc2ODgxMSwiZXhwIjoxNjgwMjAwODExfQ.u0udN9ucvlN2-OzwMllypjiJiOO_Cg6IB-8FWFgwPdk"
          },
        })
        setMovie(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovie()
  }, [item])

  return (
  <Link to='/watch' state={{movie : movie}}>
    <div 
    className="listItem"
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => {setIsHovered(true)}}
    onMouseLeave={() => {setIsHovered(false)}}
    >
        <img 
        src={movie.img}
        alt="" 
        />
        { isHovered && (
          <>
          <video 
          src={movie.trailer} 
          autoPlay
          loop
          muted
          />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className='icon'/>
              <Add className='icon'/>
              <ThumbUp className='icon'/>
              <ThumbDown className='icon'/>
            </div>
            <div className="itemInfoTop">
              <span>1 Hour, 14 Minutes</span>
              <span className="limit">{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">{movie.desc}</div>
          </div>
          <div className="genre">{movie.genre}</div>
          </>
        )}
    </div>
  </Link>
  )
}

export default ListItem