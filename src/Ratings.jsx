import { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'


function Rating(props) {
    const [rating, setRating] = useState(props.rating)

    const styles = {
        startStyle:{
            color: 'orange'
        }
    }
    return (
        <div style={styles.startStyle}>
            <h4>Rating: {rating}</h4>
            {rating >= 1 ? (
                <IoIosStar onClick={() => setRating(1)}/>
            ) : (
                <IoIosStarOutline onClick={() => setRating(1)}/>
            )}
            {rating >= 2 ? (
                <IoIosStar onClick={() => setRating(2)}/>
            ) : (
                <IoIosStarOutline onClick={() => setRating(2)}/>
            )}
            {rating >= 3 ? (
                <IoIosStar onClick={() => setRating(3)}/>
            ) : (
                <IoIosStarOutline onClick={() => setRating(3)}/>
            )}
        </div>
    )
}

export default Rating