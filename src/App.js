import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Mal from './components/Pages/Mal';
import Theme from './components/Styles/Theme';



function App() {
  return (
    <>
    <Theme>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/mal' element={<Mal/>} />
        </Routes>
        <Footer/>
      </Router>
    </Theme>
    </>
  );
}

export default App;
