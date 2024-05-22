import React from 'react';
import perross2a from '../images/perro2.jpg';
const Perross2 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3" id='fg'>
          <img src={perross2a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross2;

