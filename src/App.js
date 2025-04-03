import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Back from "./components/Back";
import Carousel from "./components/Carousel";
import Category from "./components/Category";
import Jobs from "./components/Jobs";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import Testimonial from "./components/Testimonial";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Faqs from "./components/Faqs"; 

import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/category" element={<Category />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/back" element={<Back />} />
          <Route path="/spinner" element={<Spinner />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
