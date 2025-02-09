import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Pages/Navbar';
import Home from './Component/Pages/Home';
import Footer from './Component/Pages/Footer';
import SuccessModal from './Component/Pages/SuccessModal.jsx';
// import Modelbox from './Component/Pages/Modelbox.jsx';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/success" element={<SuccessModal/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
