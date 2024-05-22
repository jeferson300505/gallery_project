import React from 'react';
import perross9a from '../images/perro9.jpg';

const Perross9 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id='fg'>
          <img src={perross9a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross9;

