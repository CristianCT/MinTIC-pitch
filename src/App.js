import { BrowserRouter as Router, Route } from 'react-router-dom'; //Create the diferents routes and router
import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  return (
    <Router> {/* Create router */}
      <Route exact path="/" component={ Home } /> {/* Create route at Home */}
      <Route path="/products" component={ Products } /> {/* Create route at Products */}
      <Route path="/about" component={ About } /> {/* Create route at About */}
      <Route path="/contact" component={ Contact } /> {/* Create route at Contact */}
    </Router>
  );
}

export default App;