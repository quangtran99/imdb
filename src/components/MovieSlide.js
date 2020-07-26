import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default function MovieSlide() {
    let [movieInfo, setmovieInfo] = useState(null);
    let n = (Math.floor(Math.random() * 100))

    let fetchMovieInfo = async () => {
        let url = `https://api.themoviedb.org/3/trending/all/day?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&page=${n}`;
        let data = await fetch(url);
        let result = await data.json();

        setmovieInfo(result);
    }

    useEffect(fetchMovieInfo, []);

    if (!movieInfo) {
        return <div>Loading</div>
    };

    return (
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[0].backdrop_path}`}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{movieInfo.results[0].title}</h3>
      <p>{movieInfo.results[0].overview}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[1].backdrop_path}`}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{movieInfo.results[1].title}</h3>
      <p>{movieInfo.results[1].overview}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movieInfo.results[2].backdrop_path}`}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{movieInfo.results[2].title}</h3>
      <p>{movieInfo.results[2].overview}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
