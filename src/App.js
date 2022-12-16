import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import TreD from './components/Pages/3D';
import Theme from './components/Styles/Theme';
import Web from './components/Pages/Web';
import BackgroundEffect from './components/BackgroundEffects';
import Grafisk from './components/Pages/Grafisk';
import { useEffect } from 'react';


function App() {
  return (
    <>
    <Theme>
      <Router>
        <Navbar/>
        <BackgroundEffect/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/3D' element={<TreD/>} />
          <Route exact path='/Web' element={<Web/>} />
          <Route exact path='/Grafisk' element={<Grafisk/>} />
        </Routes>
        <Footer/>
      </Router>
    </Theme>
    </>
  );
}

export default App;
