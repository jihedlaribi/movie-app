import "./App.css";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieNav from "./components/MovieNav";


function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21Zdm1qbXZ2dGNtdWNtRWFtRW1HTmptRW1q.jpg",

      title: "Son of the South",
      rating: 2,
      year: "1999",
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81luv8TaKlL._AC_SY879_.jpg",
      title: "The Revenant",
      rating: 4,
      year: "2015",
    },
    {
      id: 5,
      image:
        "https://s3-eu-west-1.amazonaws.com/entertainmentie/uploads/2016/04/03143422/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ%40._V1_.jpg",
      title: "Lord of war",
      rating: 3,
      year: "2008",
    },
    {
      id: 6,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21IY21FbXZtVG1tYWNtWUNqS2F4bXZtRQ.jpg",
      title: "Dream house",
      rating: 4,
      year: "2015",
    },
    {
      id: 7,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY3Z0Y21wcHB2RWNtRW1ieG1zam1qdmNQ.jpg",
      title: "Planet Earth",
      rating: 4,
      year: "2015",
    },
    {
      id: 8,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21UcEV2Y21ibXZtYWNtcG14bW1tbW1wbXg.jpg",
      title: "Cloverfield ",
      rating: 5,
      year: "2015",
    },
    {
      id: 9,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21ZWUV2TlR2RWNtVGpQbUVtWUVtWUU.jpg",
      title: "Seconds Apart ",
      rating: 1,
      year: "2015",
    },
    {
      id: 10,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21ZbXZjbVl2bUhjRWNtSVB2TmptRVBtbW1F.jpg",
      title: "Burn It All",
      rating: 2,
      year: "2015",
    },
  ]);

  const handleAdd = (title, image, rating, year) =>
  setMovieList([...movieList, { title, image, rating, year }]);
console.log(movieList);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleDelete = (idTask) => {
    setMovieList(movieList.filter((el) => el.id !== idTask));
  };
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0)
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };

  return (
    <div className="movie">
     <MovieNav
        handleAdd={handleAdd}
        movies={movieList}
        handleShow={handleShow}
        handleHide={handleHide}
        search={search}
        setSearch={setSearch}
        ratingChanged={ratingChanged}
        
       
       
      />
      {show ? (
        <AddMovie
          handleShow={handleShow}
          handleAdd={handleAdd}
          handleHide={handleHide}
        />
      ) : null}
 <MovieList  search={search}movies={movieList} handleDelete={handleDelete} rate={rate} />
 
      <Footer />
    </div>
  );
}

export default App;
