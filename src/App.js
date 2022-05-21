import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Welcome from './pages/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
