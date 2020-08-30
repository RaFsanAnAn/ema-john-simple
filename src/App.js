import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inventory from './components/Inventorry/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';
function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productKey">
         <ProductDetails></ProductDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
