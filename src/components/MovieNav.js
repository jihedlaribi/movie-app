import React from "react";

import ReactStars from "react-rating-stars-component";
import { Navbar,  FormControl, Form, Nav } from "react-bootstrap";



const MovieNav = ({
  handleShow,
  search,setSearch,
 
  ratingChanged,
  rate,
}) => {
 

  return (
    <div>
      <Navbar style={{ backgroundColor: "#000000" }}>
        <Navbar.Brand href="#home">
          <img
            src="https://logopond.com/logos/e9b985c80c0a0c04b698feed80e5c8f7.png"
            alt="hbo"
            style={{ height: 70, margin: 0 }}
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"> </Nav.Link>
        </Nav>
        <Form inline>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            value={rate}
          />

          <FormControl
            onChange={e=>{setSearch(e.target.value)}}
            value={search}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />

        
          <i id="add"onClick={handleShow} class="far fa-plus-square fa-2x"></i>
        
        </Form>
      </Navbar>
      
    </div>
  );
};

export default MovieNav;
