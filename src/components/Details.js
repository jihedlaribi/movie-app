import React from "react";
import {Button} from 'react-bootstrap'
import {Link}  from "react-router-dom"


const Details = ({match,el}) => {
 
  

  return (
    <div>
       
                  <Link to="/MovieList"><Button variant="primary">Go Back</Button></Link>
                
    </div>
  );
};

export default Details;