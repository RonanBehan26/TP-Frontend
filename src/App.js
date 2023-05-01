import { Home, NavBar, About, Contact, Portfolio, Footer, Register, Login} from './components';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/sign-up' element={<Register/>} />
        <Route path='/sign-in' element={<Login/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
  
export default App;
