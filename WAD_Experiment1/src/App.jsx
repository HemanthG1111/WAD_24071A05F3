import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import CarModels from './components/CarModels';
import Booking from './components/Booking';
import EMIDetails from './components/EMIDetails';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="flex-grow-1 pb-5">
          <Routes>
            <Route path="/" element={<CarModels />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/emi" element={<EMIDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="text-center py-3 bg-light">
          <h2>@24071A05F3</h2>
        </footer>
      </div>
    </Router>
  );
}

export default App;

