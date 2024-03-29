import { ArrowBackOutlined, ClassSharp } from "@material-ui/icons"
import { Link, useLocation } from 'react-router-dom'
import './watch.scss'

const Watch = () => {
  const location = useLocation()
  const movie = location.state.movie
 
  
  return (
    <div className='watch'>
      <Link to='/'>
      <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
      </Link>
        <video 
        className="video"
        autoPlay
        progress
        controls
        muted
        src={movie.video}
        />
    </div>
  )
}

export default Watch