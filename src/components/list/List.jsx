import './list.scss'
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem.jsx'
import { useRef } from 'react'

const List = () => {

    const listRef = useRef()

    const handleClick = (direction) => {

        let distance = listRef.current.getBoundingClientRect().x - 50
        console.log(distance)

        if(direction === 'left') {
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }

        if(direction === 'right') {
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
    }

  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className="sliderArrow left"
            onClick={() => handleClick('left')} />
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlined 
            className="sliderArrow right"
            onClick={() => handleClick('right')} />
        </div>
    </div>
  )
}

export default List