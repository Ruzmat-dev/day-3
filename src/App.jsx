import React  , {useState}from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import User from "./pages/User";
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
const App = () => {

  const [them ,setThem] = useState(localStorage.getItem("them") || "Light");
  const [langes , setLanges] =useState(localStorage.getItem("langes") || "en");


  return (
    <>
      
        <Navbar setThem={setThem} them={them} setLanges={setLanges} langes={langes}/>
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home langes={langes}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='*' element={<Error/>} />

          </Routes>
        </main>
        <Footer them={them} langes={langes}/>
      
    </>
  );
};

export default App;