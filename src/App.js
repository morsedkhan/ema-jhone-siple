import React from 'react';

import './App.css';
import Header from './component/HEADER/Header';
import Shop from './component/Shop/Shop';
import Product from './component/Product/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import Notfound from './component/Notfound';
import Productdetils from './component/Productdeteils/Productdetils';
import Login from './component/Cart/Login/Login';
import Shipment from './component/Shipment/Shipment';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRout from './component/Privateraute/PrivateRout';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedInUser,setLoggedInUser]}>
    <h2>email: {loggedInUser.email}</h2>
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRout path="/inventory">
          <Inventory></Inventory>
        </PrivateRout>
        <Route path="/login">
        <Login></Login>
        </Route>
        <PrivateRout path="/shipment">
          <Shipment></Shipment>
        </PrivateRout>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <Productdetils></Productdetils>
        </Route>
        <Route  path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>      
    </UserContext.Provider>
  );
}

export default App;
