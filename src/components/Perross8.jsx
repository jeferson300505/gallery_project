import React from 'react';
import perross8a from '../images/perro8.jpg';

const Perross8 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id='fg'>
          <img src={perross8a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross8;

