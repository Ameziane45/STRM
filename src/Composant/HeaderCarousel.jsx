import React from "react";
import "../Styles/Header.css";
import LogoImage from "../../public/Logo.png";


const HeaderCarousel = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Header Carousel</title>

        {/* Bootstrap Stylesheet */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />

        {/* Custom CSS */}
        <link rel="stylesheet" href="./Styles/headerCarousel.css" />

        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
        />
      </head>

      <body>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img alt="Logo" src={LogoImage} />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Accueil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      À Propos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* Section Carousel */}
        <section className="container__carousel">
          <div
            id="main__carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            {/* Dots */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#main__carousel"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#main__carousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#main__carousel"
                data-bs-slide-to="2"
              ></button>
            </div>
            <div className="carousel-inner">
              {/* Slide 01 */}
              <div className="carousel-item active">
                <img
                  src="sawX.jpg"
                  alt="Saw X movie"
                  className="d-block w-100"
                />
                <div className="carousel-caption hero__custom text-start">
                  <h1 className="fw-bold mb-4">Saw X</h1>
                  <p className="lead mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                  <a
                    href="#"
                    className="mt-2 btn btn-outline-light"
                    role="button"
                  >
                    Catégorie01
                  </a>
                  <a
                    href="#"
                    className="mt-2 btn btn-outline-light"
                    role="button"
                  >
                    Catégorie02
                  </a>
                </div>
              </div>
              {/* Slide 02 */}
              <div className="carousel-item">
                <img
                  src="murderCity.jpg"
                  alt="Murder City movie"
                  className="d-block w-100"
                />
                <div className="carousel-caption hero__custom text-start">
                  <h1 className="fw-bold mb-4">Murder City</h1>
                  <p className="lead mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                  <a
                    href="#"
                    className="mt-2 btn btn-outline-light"
                    role="button"
                  >
                    Catégorie01
                  </a>
                  <a
                    href="#"
                    className="mt-2 btn btn-outline-light"
                    role="button"
                  >
                    Catégorie02
                  </a>
                </div>
              </div>
              {/* Slide 03 */}
              <div className="carousel-item">
                <img
                  src="millenium.jpg"
                  alt="Millenium movie"
                  className="d-block w-100"
                />
                <div className="container">
                  <div className="carousel-caption hero__custom text-start">
                    <h1 className="fw-bold mb-4">Millenium</h1>
                    <p className="lead mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, voluptatum.
                    </p>
                    <a
                      href="#"
                      className="mt-2 btn btn-outline-light"
                      role="button"
                    >
                      Catégorie01
                    </a>
                    <a
                      href="#"
                      className="mt-2 btn btn-outline-light"
                      role="button"
                    >
                      Catégorie02
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons Control */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#main__carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#main__carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        {/* Bootstrap JS */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
};

export default HeaderCarousel;
