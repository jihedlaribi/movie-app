import React from "react";
import {Button} from 'react-bootstrap'
import {Link}  from "react-router-dom"


const Details = ({match,el}) => {
  const movie = el.find(
    (elt) => elt.id.toString() === match.params.id.toString()
  );
 
  return (
    <div>
      <p>{movie.title}</p>
      
       
                  {/* <Link to="/movielist"><Button variant="primary">Go Back</Button></Link> */}
                
    </div>
  );
};

export default Details;