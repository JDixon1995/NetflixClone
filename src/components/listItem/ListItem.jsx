import './listItem.scss'
import { PlayArrow, Add, ThumbUp, ThumbDown } from '@material-ui/icons'

const ListItem = () => {
  return (
    <div className="listItem">
        <img 
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" 
        alt="" 
        />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow />
            <Add />
            <ThumbUp />
            <ThumbDown />
          </div>
          <div className="intemInfoTop">
            <span>1 Hour, 14 Minutes</span>
            <span className="limit">+17</span>
            <span>1999</span>
          </div>
          <div className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore consectetur maxime laborum porro quisquam reiciendis mollitia.</div>
        </div>
        <div className="genre">Action</div>
    </div>
  )
}

export default ListItem