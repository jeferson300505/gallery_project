import React from 'react';
import perross6a from '../images/perro6.jpg';

const Perross6 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id='fg'>
          <img src={perross6a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross6;

