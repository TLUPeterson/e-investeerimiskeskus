import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services'
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact/Contact'
/*
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});*/

function App() {

  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/contact' exact component={Contact} />
            {/* <Route path='/products' component={Products} /> */}
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
