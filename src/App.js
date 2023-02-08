import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import Api from './Pages/Api/Api';
import Blog from './Pages/Blog/Blog';
import Codes from './Pages/Codes/Codes';
import Contact from './Pages/Contact/Contact';
import CreditNumber from './Pages/Creditanumber/CreditNumber';
import Credits from './Pages/Credits/Credits';
import Faq from './Pages/Faq/Faq';
import History from './Pages/History/History';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Privacy from './Pages/Privacy/Privacy';
import Reacherge from './Pages/Recharge/Reacherge';
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
     <Route path="/codes" element={<Codes />} />
     <Route path="/credits" element={<Credits />} />
     <Route path="/credit-number" element={<CreditNumber />} />
     <Route path="/history" element={<History />} />
     <Route path="/recharge" element={<Reacherge />} />
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
