//Import Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
//Import Components
import HeaderBar from '../src/componets/HeaderBar'
import CartGuide from '../src/componets/cartGuide/CartGuide'
import All from '../src/pages/All'


//Main Component
function App() {
  return (
    <>
      <Router>

        <HeaderBar />
        <CartGuide />

        <Switch>

          <Route path="/all">
            <All />
          </Route>
          {/* <Route path="/crisps">
            <Crisps />
          </Route>
          <Route path="/biscuits">
            <Biscuits />
          </Route>
          <Route path="/sweets">
            <Sweets />
          </Route>
          <Route path="/chocolates">
            <Chocolates />
          </Route>
          <Route path="/others">
            <Others />
          </Route>
          <Route path="/">
            <Deliveries />
          </Route> */}

        </Switch>
      </Router>
    </>
  );
}

export default App;
