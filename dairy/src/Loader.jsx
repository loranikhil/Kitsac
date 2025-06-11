import { useEffect, useState } from 'react';
import './Loader.css'; // We'll create this next

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (remove this in production)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-container">
      <div className="loader-content">
        {/* Replace with your logo or placeholder */}
        <div className="logo-placeholder">
         <div className="logo-placeholder">
  <img src="https://kitsacitsolutions.com/img/akashay%20logo.jpg" alt="Company Logo" className="logo-imagee" />
</div>
        </div>
        <div className="loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;