import React from "react";
import axios from "axios";
import Movie from "../Movie";
import { useState } from "react";
import None from "../None.jsx";
import axiosConfig from "../../axiosConfig";
import Header from "../Header.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function MovieList({ title, setTitle }) {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    const getPeliculas = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=7e168bd7360b960bbcf7cbd2d95f02b4&page=${page}`
      );
      setMovies((prev) => [...prev, ...response.data.results]);
    };
    getPeliculas();
  }, [page]);

  return (
    movies && (
      <>
        <Header />
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="App"></div>
          <div className="container">
            <div className="row mt-3">
              {movies.length > 0 ? (
                movies.map((movie) => <Movie movie={movie} key={movie.id} />)
              ) : (
                <None />
              )}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  );
}

export default MovieList;
