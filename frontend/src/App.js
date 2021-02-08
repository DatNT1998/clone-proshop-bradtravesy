import React from 'react';
import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom'
;
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
