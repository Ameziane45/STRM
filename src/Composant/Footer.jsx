import React from "react";
import "../Styles/Footer.css";
import "../app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Footer = () => {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>LIENS RAPIDES</h3>
              <ul>
                <li>
                  <a href="#">Catégories</a>
                </li>
                <li>
                  <a href="#">Film</a>
                </li>
                <li>
                  <a href="#">Acteurs</a>
                </li>
                <li>
                  <a href="#">À Propos</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>NEWSLETTER</h3>
              <ul>
                <li>
                  <a href="#">Job openings</a>
                </li>
                <li>
                  <a href="#">Employee success</a>
                </li>
                <li>
                  <a href="#">Benefits</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright">STRM © 2023</p>
      </footer>
    </div>
  );
};

export default Footer;
