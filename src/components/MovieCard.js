import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'

export default function MovieCard(props) {
    let movie = props.movie
    const [lgShow, setLgShow] = useState(false);
    const [youtubeLink, setYoutubeLink] = useState(null);
    const callApiGetVideo = async () => {
        let url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=938008e9b9bfe4ec58d30e7abcbaa49e&language=en-US&append_to_response=videos`
        let respone = await fetch(url)
        let data = await respone.json()
        if (data.videos.results.length > 0) {
            setYoutubeLink(data.videos.results[0].key)
        }

    }

    useEffect(() => {
        callApiGetVideo()
    }, [])


    return (
        <Row className="justify-content-between">
            <div className="col-3 m-0 p-1 ">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                    <Card.Body className="card-place" onClick={() => setLgShow(true)}>
                        <div className="information-card">
                            <Card.Title className="title-name">{movie.title}</Card.Title>
                            <Card.Title className="title-name">IMDB :{movie.vote_average}</Card.Title>
                            <Card.Text className="description-text">
                                {movie.overview}
                            </Card.Text>
                        </div>

                    </Card.Body>
                    <Modal
                        className = "myVideo"
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        onClick={callApiGetVideo}
                        aria-labelledby="example-modal-sizes-title-lg">

                            <p class="modal-content"> <iframe src={`https://www.youtube.com/embed/${youtubeLink}`} > </iframe></p>

                    </Modal>
                </Card>

            </div>

        </Row >
    )
}


