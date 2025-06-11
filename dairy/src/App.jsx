import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Client from './Client';
import Contact from './Contact';
import Footer from './Footer';
import Loader from './Loader';
import Career from './Career';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading && <Loader />}

      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Client />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/career" element={<Career />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
