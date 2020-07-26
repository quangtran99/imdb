import React from 'react'
import MovieCard from './MovieCard'


export default function MovieBoard(props) {
    let movieList = props.movieList
    return (
        <div class="row m-0 p-0 justify-content-between">
            {movieList.map(item=>{return(
                            <MovieCard movie={item} />
            )})}
        </div>
    )
}
