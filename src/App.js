import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
   );
}

export default App;
