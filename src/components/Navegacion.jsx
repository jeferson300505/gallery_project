import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Perross1 from './Perross1';
import Perross2 from './Perross2';
import Perross3 from './Perross3';
import Perross4 from './Perross4';
import Perross5 from './Perross5';
import Perross6 from './Perross6';
import Perross7 from './Perross7';
import Perross8 from './Perross8';
import Perross9 from './Perross9';
import Perross10 from './Perross10';
import '../App.css';

const Navegacion = () => {
  const location = useLocation();

  return (
    <div id='carouselExampleControls' className="container mt-4 father">
      <Link
        to="/perros01"
        className={`no-text-decoration ${location.pathname === "/perros01" ? 'selected' : ''}`}
      >
        <figure>
          <Perross1 />
          <figcaption>perro1</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros02"
        className={`no-text-decoration ${location.pathname === "/perros02" ? 'selected' : ''}`}
      >
        <figure>
          <Perross2 />
          <figcaption>perro2</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros03"
        className={`no-text-decoration ${location.pathname === "/perros03" ? 'selected' : ''}`}
      >
        <figure>
          <Perross3 />
          <figcaption>perro3</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros04"
        className={`no-text-decoration ${location.pathname === "/perros04" ? 'selected' : ''}`}
      >
        <figure>
          <Perross4 />
          <figcaption>perro4</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros05"
        className={`no-text-decoration ${location.pathname === "/perros05" ? 'selected' : ''}`}
      >
        <figure>
          <Perross5 />
          <figcaption>perro5</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros06"
        className={`no-text-decoration ${location.pathname === "/perros06" ? 'selected' : ''}`}
      >
        <figure>
          <Perross6 />
          <figcaption>perro6</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros07"
        className={`no-text-decoration ${location.pathname === "/perros07" ? 'selected' : ''}`}
      >
        <figure>
          <Perross7 />
          <figcaption>perro7</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros08"
        className={`no-text-decoration ${location.pathname === "/perros08" ? 'selected' : ''}`}
      >
        <figure>
          <Perross8 />
          <figcaption>perro8</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros09"
        className={`no-text-decoration ${location.pathname === "/perros09" ? 'selected' : ''}`}
      >
        <figure>
          <Perross9 />
          <figcaption>perro9</figcaption>
        </figure>
      </Link>
      <Link
        to="/perros10"
        className={`no-text-decoration ${location.pathname === "/perros10" ? 'selected' : ''}`}
      >
        <figure>
          <Perross10 />
          <figcaption>perro10</figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navegacion;