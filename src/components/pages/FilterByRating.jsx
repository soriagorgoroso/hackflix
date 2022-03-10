import React from "react";
import Rating from "react-rating";
import axios from "axios";
import { useState } from "react";
import Movie from "../Movie";
import axiosConfig from "../../axiosConfig";
import InfiniteScroll from "react-infinite-scroll-component";
import None from "../None";

function FilterByRating() {
  const [rating, setRating] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  React.useEffect(() => {
    const getPeliculas = async () => {
      axiosConfig.params["vote_average.gte"] = rating * 2 - 0.99;
      axiosConfig.params.page = page;
      const { data } = await axios.get("discover/movie", axiosConfig);
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((prev) => [...prev, ...data.results]);
      }
    };
    getPeliculas();
  }, [rating, page]);

  return (
    <>
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="App"></div>
        <div className="container">
          <div className="row mt-3">
            <div>
              <div className="pt-5 App">
                <Rating
                  className="pt-5"
                  style={{}}
                  onChange={(newR) => setRating(newR)}
                  // emptySymbol="fa-solid fa-star-o fa-2x"
                  // fullSymbol="fa-solid fa-star fa-2x"
                />
              </div>
            </div>
            {movies.length > 0 ? (
              movies.map((movie) => <Movie movie={movie} key={Math.random()} />)
            ) : (
              <None />
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default FilterByRating;
