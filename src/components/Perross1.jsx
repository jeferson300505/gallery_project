import React from 'react';
import perross1a from '../images/perro1.jpg';

const Perross1 = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-6   offset-md-3 " id='fg'>
          <img src={perross1a} className="img-fluid  " alt="Foto de perro" />
        </div>
      </div>
    </div>
  )
}

export default Perross1;

