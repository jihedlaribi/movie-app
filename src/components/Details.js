import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Details.css"

const Details = ({ match, movies }) => {
  const movie = movies.find(
    (elt) => elt.id.toString() === match.params.id.toString()
  );
  function likeTag(event) {
    var like = event.target;
    console.log('like')
    if (like.style.color === 'red') {
        like.style.color = '#000000'
    } else {
        like.style.color = 'red'

    }



}

  return (
    <div className='details'>
      <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 id='trailer'>Trailer:</h1>
      <iframe id='vedio'
        width="853"
        height="480"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <br/>
      <br/>
<h1 id='description'>Description:</h1>
<br/>
<br/>

      <p id='parag'>{movie.description}</p>
      <br/>
      <br/>

<div className='icon'>
<i class="fas fa-play  fa-2x"></i> 
<i class="fas fa-plus  fa-2x"></i>
<i onClick={likeTag} class="fas fa-heart fa-2x"></i>

<i  onClick={likeTag} class="fas fa-heart-broken fa-2x" ></i>


</div>
      <Link to="/">
        <Button variant="primary">Go Back</Button>
      </Link>
      </div>
    </div>
  );
};

export default Details;
