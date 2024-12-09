import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Create the diferents routes and router
import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Router> {/* Create router */}
      <Routes>
        <Route exact path="/" element={ <Home/> } /> {/* Create route at Home */}
        <Route path="/products" element={ <Products/> } /> {/* Create route at Products */}
        <Route path="/about" element={ <About/> } /> {/* Create route at About */}
        <Route path="/contact" element={ <Contact/> } /> {/* Create route at Contact */}
      </Routes>
    </Router>
  );
}

export default App;