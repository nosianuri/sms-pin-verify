import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Api from './Pages/Api/Api';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Privacy from './Pages/Privacy/Privacy';
import Regestration from './Pages/Regestration/Regestration';
import Terms from './Pages/Terms/Terms';

function App() {
  return (
    <div>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/api" element={<Api />} />
     <Route path="/faqs" element={<Faq />} />
     <Route path="/blog" element={<Blog />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/privacy" element={<Privacy />} />
     <Route path="/terms" element={<Terms />} />
     <Route path="/login" element={<Login />} />
     <Route path="/registration" element={<Regestration />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
