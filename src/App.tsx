import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen transition-all duration-500 ease-in-out">
      <Header />
      <main className="pt-20 px-4 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
