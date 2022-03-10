import { useState, useEffect } from "react";
import axios from "axios";
import axiosConfig from "../../axiosConfig";
import Movie from "../Movie";
import None from "../None";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "..//movie.css";
import "..//header.css";

function FilterByTitle() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  React.useEffect(() => {
    !title && setMovies([]);
    const getPeliculas = async () => {
      axiosConfig.params.query = title;
      axiosConfig.params.page = page;
      const { data } = await axios.get("search/movie", axiosConfig);
      page === 1
        ? setMovies(data.results)
        : setMovies((prev) => [...prev, ...data.results]);
    };
    title && getPeliculas();
  }, [title, page]);
  return (
    movies && (
      <>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage((prev) => prev + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {" "}
          <div className="App"></div>
          <div className="container">
            <div className="row mt-5">
              <div>
                <div className="m-5">
                  <input
                    className="form-control mt-5 "
                    type={"text"}
                    id={title}
                    placeholder="Ingresar titulo de una pelicula..."
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      setPage(1);
                    }}
                  />
                </div>
              </div>
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

export default FilterByTitle;
