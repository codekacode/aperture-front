import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Nav';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
