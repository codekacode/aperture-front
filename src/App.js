import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav';
import { Product } from './components/Products/Product/Product';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
    </Router>
  );
}

export default App;
