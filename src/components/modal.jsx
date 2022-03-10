import React from "react";

function modal() {
  return (
    <Modal
      size="xl"
      show={show}
      dialogClassName="modal-90w"
      onHide={handleClose}
      className=""
    >
      <Modal.Body
        className="p-0 App-header img-fluid rounded-3 imageModal"
        style={{
          backgroundImage: `url(${
            "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></Modal.Body>
      <Modal.Footer className="modalProp">
        <div className="row">
          <div className="d-flex justify-content-start col-3">
            <p>
              <img style={{ width: "35px" }} className="p-2" src={logo1} />
              <span style={{ color: "white" }}> {movie.vote_average}</span>
              <br></br>
              <span style={{ color: "white" }}>
                {movie.release_date}
                <br></br>
                Lenguaje: {movie.original_language}
                <br></br>
              </span>
            </p>
          </div>
          <div style={{ color: "white" }} className="col-9 p-2 bd-highlight">
            <span>
              {movie.title} <br />
              {movie.overview}
            </span>
          </div>
        </div>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default modal;
