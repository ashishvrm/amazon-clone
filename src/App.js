import './App.scss';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //Amazon Cloning App
    <Router>
      <div className="app">
        {/* Application Header */}
          <Header />

          {/* Routes to Pages */}
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/login" element={<Login />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;