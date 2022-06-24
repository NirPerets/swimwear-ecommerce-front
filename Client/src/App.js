import './Styles.scss';

import AnnouncementBar from './Components/AnnouncementBar'
import Header from './Components/Header'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Footer';
import CartDrawer from './Snippets/CartDrawer';
import { useEffect, useState } from 'react';
import MenuDrawer from './Snippets/MenuDrawer';
import Product from './Components/Product';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Collection from './Components/Collection';
import Admin from './Admin/Admin';
import Checkout from './Components/Checkout';

function App() {
  const [cartActive, toggleCart] = useState(0)
  const [menuActive, toggleMenu] = useState(0)
  const [overlayActive, toggleOverlay] = useState(0)

  useEffect(() => {
    if(localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  }, [])

  return (
    <div className="App">
      <div className={
        "body__overlay overlay" + 
        (cartActive ? ' is_visible' : '') + 
        (menuActive ? ' is_visible' : '') + 
        (overlayActive ? ' search__overlay is_visible' : '')}>
      </div>
      <Router>
        <MenuDrawer menuActive={ menuActive } toggleMenu={ toggleMenu } />
        <CartDrawer cartActive={ cartActive } toggleCart={ toggleCart } />
        
          <div className="header sticky__header">
            <AnnouncementBar />
            <Header toggleOverlay={ toggleOverlay } toggleCart={ toggleCart } toggleMenu={ toggleMenu } />
          </div>

          <div className="main__content">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/product/:id" element={<Product toggleCart={ toggleCart } />} />
              <Route exact path="/collection/:title" element={<Collection />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

/*

*/