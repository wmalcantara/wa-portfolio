import './global.css';

import MenuBar from './components/MenuBar.js';
import Footer from './components/Footer.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Contato from './components/Routes/Contato.js';
import Portfolio from './components/Routes/Portfolio.js';
import SobreMim from './components/Routes/SobreMim.js';
import Home from './components/Routes/Home.js';

function App() {
  return (
    <>
      <Router>
        <MenuBar />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobremim" element={<SobreMim />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
