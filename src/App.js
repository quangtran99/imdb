import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBoard from './components/MovieBoard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import MovieSlide from './components/MovieSlide';

let n = 1;
let clone = [];



// const apikey = process.env.REACT_APP_APIKEY
function App() {
  let [movieList, setMovieList] = useState(null); // for show on UI
  // let [loading, setLoading] = useState(false);

  const callMovie = async () => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${n}`
    let result = await fetch(url);
    let data = await result.json();
    console.log("data", data);
    clone.push(data.results)
    setMovieList(data.results);
  };

  const topRated = async () => {
    let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&page=${n}`
    let result = await fetch(url);
    let data = await result.json();
    clone.push(data.results)
    console.log("data", data.results)
    setMovieList(data.results);
  };

  const popular = async () => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&page=${n}`
    let result = await fetch(url);
    let data = await result.json();
    clone.push(data.results)
    setMovieList(data.results);
  };

  const callKeyWord = async (a) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&page=1&include_adult=false&query=${a}`
    let result = await fetch(url)
    let data = await result.json()
    setMovieList(data.results)

  }

  let Search = () => {
    let i = document.getElementById("input").value
    if (i === '') {
      alert("You need to enter Movie name")
    } else {
      let searchMovie = i;
      callKeyWord(searchMovie)
    }

  }


  // const loadMore = async () => {
  //   n++;
  //   let url = `https://api.themoviedb.org/3/discover/movie?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${n}`;

  //   let result = await fetch(url);
  //   let data = await result.json();
  //   clone[0].push(...data.results);
  //   console.log("clone", clone)

  //   setMovieList(clone)
  //   setLoading(false);
  // }


  // const handleScroll = (e) => {
  //   if (loading) return;
  //   if ((window.innerHeight + window.pageYOffset)+1 >= document.body.offsetHeight) {
  //     loadMore(movieList);
  //   };

  // };


  useEffect(() => {
    callMovie();
    // window.addEventListener('scroll', () => handleScroll(movieList));
  }, [])


  if (movieList == null) {
    return (
      <h2>loading...</h2>
    )
  }

  return (
    <div className="background-body">
      <Navbar expand="lg" className="nav-background button-border">
        <Navbar.Brand className="d-lg-none name-color" href="index.js">MOVIE LIBRARY </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto">
            <NavDropdown title="Sort" id="basic-nav-dropdown" className="sort-color">
              <NavDropdown.Item onClick={topRated}>Rating</NavDropdown.Item>
              <NavDropdown.Item onClick={popular}>
              Popularity 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <a className="navbar-brand d-none d-lg-flex name-color " href="index.js">
          MOVIE LIBRARY
                </a>
          <Form inline className="ml-auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 "
              id = "input"
            />
            <Button  variant="outline-success" onClick={Search}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container ">
        <div className="row ">
          <div className="col-md-9 p-0 ">
            <MovieSlide />
            <div >
              <MovieBoard movieList={movieList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
