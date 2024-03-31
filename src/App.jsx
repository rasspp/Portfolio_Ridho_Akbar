import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolios from "./components/Portfolios/Portfolios";
import Footer from "./components/Footer";
import Experience from "./components/Experience/Experience";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/portfolios" element={<Portfolios />} />
               <Route path="/about" element={<About />} />
               <Route path="/experience" element={<Experience />} />
               <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
