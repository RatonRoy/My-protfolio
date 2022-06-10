import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import Resume from './components/Pages/Resume/Resume';
import Footer from './components/Pages/Shared/Footer/Footer';
import Navbar from './components/Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='resume' element = {<Resume></Resume>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
