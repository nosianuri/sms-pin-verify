import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Privacy from './Pages/Privacy/Privacy';
import Terms from './Pages/Terms/Terms';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/privacy" element={<Privacy />} />
     <Route path="/terms" element={<Terms />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
