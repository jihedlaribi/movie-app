import React from "react";
import ItemInterval from "./ItemInterval";

import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieList = ({ movies, handleDelete, search,rate}) => {
  return (
    <div>
      <ItemInterval />
      <div className="movieList">
      {movies.filter((el)=>el.title.toUpperCase().includes(search.toUpperCase())&& el.rating >= rate).map((el, index) => 
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
            <Link to={`/MovieList/${el.id}`}>  <i id='e' class="far fa-credit-card fa-2x" ></i></Link></div>
             
            </Card>{" "}
          
        </div>
          )}
      </div>
    </div>
  );
};

export default MovieList;
