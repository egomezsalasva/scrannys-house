//Import Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
//Import Components
import HeaderBar from './componets/HeaderBar'
import CartGuide from './componets/cartGuide/CartGuide'
import All from './pages/All'
import PageNotFound from './pages/PageNotFound'


//Main Component
function App() {
  return (
    <>
      <Router>

        <HeaderBar />
        <CartGuide />

        <Switch>
          <Route path="/all" component={All} />
          {/* <Route path="/crisps" component={Crisps} />
          <Route path="/biscuits" component={Biscuits} />
          <Route path="/sweets" component={Sweets} />
          <Route path="/chocolates" component={Chocolates} />
          <Route path="/others" component={Others} />
          <Route exact path="/" component={Deliveries} /> */}
          <Route component={PageNotFound} />
        </Switch>

      </Router>
    </>
  );
}

export default App;
