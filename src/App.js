import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Perross1 from './components/Perross1';
import Perross2 from './components/Perross2';
import Perross3 from './components/Perross3';
import Perross4 from './components/Perross4';
import Perross5 from './components/Perross5';
import Perross6 from './components/Perross6';
import Perross7 from './components/Perross7';
import Perross8 from './components/Perross8';
import Perross9 from './components/Perross9';
import Perross10 from './components/Perross10';
import Navegacion from './components/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='container-prym'>
      <h1>Foto de perros</h1>
      <Router>
        <Routes>
          <Route path='/perros01' element={<Perross1 />} />
          <Route path='/Perros02' element={<Perross2 />} />
          <Route path='/perros03' element={<Perross3 />} />
          <Route path='/Perros04' element={<Perross4 />} />
          <Route path='/Perros05' element={<Perross5 />} />
          <Route path='/Perros06' element={<Perross6 />} />
          <Route path='/Perros07' element={<Perross7 />} />
          <Route path='/Perros08' element={<Perross8 />} />
          <Route path='/Perros09' element={<Perross9 />} />
          <Route path='/Perros10' element={<Perross10 />} />
        </Routes>
        <Navegacion/>
      </Router>
    </div>

  );
}

export default App;
