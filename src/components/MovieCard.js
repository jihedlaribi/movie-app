import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";


const MovieCard = ({el,handleDelete}) => {
    return (
        <div>
            <div className="movie">
            <Card
              key={el.id}
              id="card"
              style={{ width: "18rem" , marginTop :"30px"  }}
            >
              <Card.Img
                id="img"
                variant="top"
                src={el.image}
                style={{ height: "300px", borderRadius: "10px" }}
              ></Card.Img>
              <Card.Body style={{}}>
                <Card.Title id="title"> {el.title} </Card.Title>
                <Card.Text id="year"> {el.year} </Card.Text>
                <StarRatingComponent value={el.rating} />
              </Card.Body>
              <div className='playdel'>
                
              <i id='i'class="far fa-trash-alt fa-2x  " onClick={()=>handleDelete(el.id)}></i> 
            <Link to={`/movielist/${el.id}`}>  <i id='e' class="far fa-credit-card fa-2x" ></i></Link>
            </div>
             
            </Card>{" "}
          
        </div>
        </div>
    )
}

export default MovieCard
