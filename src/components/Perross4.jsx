import React from 'react';
import perross4a from '../images/perro4.jpg';

const Perross4 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id='fg'>
          <img src={perross4a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross4;

