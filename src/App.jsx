import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>} />

          </Routes>
        </main>
        <Footer />
      
    </>
  );
};

export default App;