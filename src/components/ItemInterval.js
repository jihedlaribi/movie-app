import React from 'react'
import { Carousel } from 'react-bootstrap' 
const ItemInterval = () => {
    return (
       <div>
       <div id='h'><h1 >Coming soon : </h1> </div>   
       <div id="item">      <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/5849980.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://cdn6.f-cdn.com/contestentries/1859107/49388987/5fd7f7e6df559_thumb900.jpg"
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/a2/63/e6/a263e6a569f47756a6885dafe8b4d452.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.elcinema.com/uploads/_315x420_16e573ec0083c84d3a34c00e88b767065063ea02b63343249a53226c9811fab4.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images-na.ssl-images-amazon.com/images/I/51Qma1Xm19L._AC_SY580_.jpg"
      alt="Third slide"
    />
  
  </Carousel.Item>
</Carousel></div>
<div id='h2'>
<h1 >Recently added movies : </h1></div>
        </div>
    )
}

export default ItemInterval
