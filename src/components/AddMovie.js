import React from 'react'
import { Modal,Button,Form } from 'react-bootstrap'
import { useState } from 'react';
const AddMovie = ({handleShow,handleHide,handleAdd,movies}) => {
 
const [title, setTitle] = useState('');
const [image, setSrc] = useState('');
const [rating, setRating] = useState(0);
const [year, setYear] = useState('');


 
    return (
        <div>
   <Modal  show={handleShow} onHide={handleHide} animation={false}>
    <Modal.Header closeButton onClick={handleHide}>
      <Modal.Title>Add new Movie</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
    <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
        <Form.Control placeholder="image source" onChange={(e)=>setSrc(e.target.value)}/>
        <Form.Control type='number' min='0' max="5"  placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
        <Form.Control as="textarea" rows={3} placeholder="year"  type='submit'onChange={(e)=>setYear(e.target.value)}/>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary"  onClick={handleHide}>Close</Button>
      <Button variant="primary"onClick={()=> {handleAdd(title,image,rating,year);handleHide()}}
        
       >Save changes</Button>
    </Modal.Footer>
  </Modal>
  
</div>
    )
}

export default  AddMovie