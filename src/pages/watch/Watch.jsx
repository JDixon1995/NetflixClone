import { ArrowBackOutlined } from "@material-ui/icons"
import './watch.scss'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video />
    </div>
  )
}

export default Watch