import React from "react";
import { useState } from "react";
import { Col, Spinner } from "react-bootstrap";
function Movie({ movie }) {
  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="mt-4 col-sm-5 col-md-4 col-lg-3 col-xl-2 p-4">
      {/* {isLoading && (
        <div>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>{" "}
        </div>
      )}{" "} */}
      {movie.poster_path ? (
        <img
          className="img-fluid rounded-3 movieHover"
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.poster_path}
          onClick={handleShow}
          onLoad={() => React.setIsLoading(false)}
        />
      ) : (
        <img
          className="img-fluid rounded-3 movieHover"
          src="./img/descarga.png"
        />
      )}
    </div>
  );
}

export default Movie;
