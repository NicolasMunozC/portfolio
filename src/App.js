import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import About from './pages/About';
import Work from './pages/Work';
import Experiments from './pages/Experiments';


function App() {
  const isActive = true

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/experiments' element={<Experiments />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
