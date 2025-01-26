import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Initialize state with 'light'
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a3148';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'Text Utility - Dark Mode';

      setTimeout(() => {
        document.title = 'Text Utility Application';
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Text Utility - Light Mode';

      setTimeout(() => {
        document.title = 'Text Utility Application';
      }, 1500);
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="TextUtils-Text converter" />} />
          {/* About Route */}
          <Route path="/about"  element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
