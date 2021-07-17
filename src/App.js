import "./App.css";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import MovieNav from "./components/MovieNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21Zdm1qbXZ2dGNtdWNtRWFtRW1HTmptRW1q.jpg",

      title: "Son of the South",
      rating: 2,
      year: "1999",
      
      trailer:"https://www.youtube.com/embed/x0IjvDWw0i4",
    description:`In this true story set during the sixties Civil Rights Movement, a Klansman's grandson is forced to face the rampant racism of his own culture. Defying his family and white Southern norms, he embraces the fight against social injustice, repression and violence to change the world he was born into.`
 
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81luv8TaKlL._AC_SY879_.jpg",
      title: "The Revenant",
      rating: 4,
      year: "2015",
      trailer:"https://www.youtube.com/embed/LoebZZ8K5N0&t",
    description:`A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack.`
    },
    {
      id: 5,
      image:
        "https://s3-eu-west-1.amazonaws.com/entertainmentie/uploads/2016/04/03143422/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ%40._V1_.jpg",
      title: "Lord of war",
      rating: 3,
      year: "2008",
      trailer:`https://www.youtube.com/embed/AXgyoER0aRc`,
description:`This movie charts the rise and fall of Yuri Orlov, from his early days in the early 1980s in Little Odessa, selling guns to mobsters in his local neighborhood, through to his ascension through the decade of excess and indulgence into the early 1990s, where he forms a business partnership with an African warlord and his ...`
    },
    {
      id: 6,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21IY21FbXZtVG1tYWNtWUNqS2F4bXZtRQ.jpg",
      title: "Dream house",
      rating: 4,
      year: "2015",
      trailer:"https://www.youtube.com/embed/XFxIYqcmRxc&t",
     description:`Soon after moving into their seemingly idyllic new home, a family learns of a brutal crime committed against former residents of the dwelling. Soon after moving into their seemingly idyllic new home, a family learns of a brutal crime committed against former residents of the dwelling.`
      
    },
    {
      id: 7,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY3Z0Y21wcHB2RWNtRW1ieG1zam1qdmNQ.jpg",
      title: "Planet Earth",
      rating: 4,
      year: "2015",
      trailer: "https://www.youtube.com/embed/c8aFcHFu8QM",
      description: `Planet Earth is a worthy documentary series that looks not just at the animals and plants in remote areas, but at the ever-changing ecosystems that look prone to collapse in the near future.`,
    },
    {
      id: 8,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21UcEV2Y21ibXZtYWNtcG14bW1tbW1wbXg.jpg",
      title: "Cloverfield ",
      rating: 5,
      year: "2008",
      trailer: "https://www.youtube.com/embed/wxqSIsxMlYQ",
      description: `Cloverfield is a 2008 American monster film directed by Matt Reeves, produced by J. J. ... The film uses a found footage motif to follow five young New York City residents fleeing from a massive monster and various other smaller creatures that attack the city while they are having a farewell party.`,
    },
    {
      id: 9,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21ZWUV2TlR2RWNtVGpQbUVtWUVtWUU.jpg",
      title: "Seconds Apart ",
      rating: 1,
      year: "2015",
      trailer: "https://www.youtube.com/embed/3tI89hzuo4g",
      description: `Four friends are seen at a high school house party drinking
 and gossiping in a private room. Their fun is cut short when a pair of identical twins - classmates of the friends - enter the room with a video camera. The twins force the friends to play Russian roulette,
 the game ending only when all four friends are dead.`,
    },
    {
      id: 10,
      image:
        "https://i.egycdn.com/pic/WmFwZndlY21ZbXZjbVl2bUhjRWNtSVB2TmptRVBtbW1F.jpg",
      title: "Burn It All",
      rating: 2,
      year: "2015",

      trailer: "https://www.youtube.com/embed/huTb-hRJUv8",
      description: `With a history of men dominating her fate, 
      a broken woman returns to her hometown to bury her mother only to find a violent organ smuggling ring already has the body and wants no witnesses, but by trying to extinguish her
       they spark an inferno.BURN IT ALL is a new feature film coming to VOD (video on demand) February 19, 2021.(this is the old, janky trailer we made a long time ago!)`,
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
  const [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    setRate(newRating);
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

      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <MovieList
                search={search}
                movies={movieList}
                handleDelete={handleDelete}
                rate={rate}
              />
            )}
          />
          <Route
            path="/movielist/:id"
            exact
            render={(props) => <Details {...props}  movies={movieList} />}
          />{" "}
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
