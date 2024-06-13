import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav
      class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div class="container">
        <a class="navbar-brand" href="">
          Furni<span>.</span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsFurni">
          <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item ">
              <a class="nav-link" href="HomePage.jsx">
                Inicio
              </a>
            </li>
            <li class="active">
              <a class="nav-link" href="shop.html">
                Tienda
              </a>
            </li>
            <li>
              <a class="nav-link" href="about.html">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a class="nav-link" href="services.html">
                Servicios
              </a>
            </li>
            <li>
              <a class="nav-link" href="blog.html">
                Blog
              </a>
            </li>
            <li>
              <a class="nav-link" href="contact.html">
                Contactanos
              </a>
            </li>
          </ul>

          <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <a class="nav-link" href="#">
                <img src="image/user.svg" />
              </a>
            </li>
            <li>
              <a class="nav-link" href="cart.html">
                <img src="image/cart.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
