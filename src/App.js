import './App.css';
import './components/UseState'
//import UseState from './components/UseState';
//import StringWithUseState from './components/StringWithUseState';
//import ArraysWithUseState from './components/ArraysWithUseState';
//import UseEffect from './components/UseEffect';
//import UseRef from './components/UseRef';
//import UseReducer from './components/UseReducer';
//import UseMemo from './components/UseMemo';
//import Uncontrolled_Component from './components/UncontrolledComponents';
//import Controlled_Component from './components/ControlledComponentsSeperate';
//import CustomValidation from './components/Validation';
//import AsyncValidation from './components/AsynchronousValidation';
//import Formik from './components/FormikValidation';
//import NavigationBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
