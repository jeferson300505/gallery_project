import React from 'react';
import perross10a from '../images/perro10.jpg';

const Perross10 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 " id='fg'>
          <img src={perross10a} className="img-fluid" alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross10;