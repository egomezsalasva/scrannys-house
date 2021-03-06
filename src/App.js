//Import Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route, matchPath } from "react-router-dom"
//Import Context API
import { DataProvider } from './context' 
//Import Components
import HeaderBar from './componets/HeaderBar'
import CartGuide from './componets/cartGuide/CartGuide'
import All from './pages/All'
import Crisps from './pages/Crisps'
import Biscuits from './pages/Biscuits'
import Sweets from './pages/Sweets'
import Chocolates from './pages/Chocolates'
import Others from './pages/Others'
import Deliveries from './pages/Deliveries'
import PageNotFound from './pages/PageNotFound'
import Verify from './pages/Verify'


//Main Component
function App() {

  const verifyPage = matchPath( "/", { path: "/", exact: true, strict: true } )

  console.log(verifyPage.url)

  return (
    <>
    <DataProvider>
      <Router>

      <HeaderBar />
      <CartGuide stripeToken="pk_test_THMmkRyxUjPhHmv4shPG6fM900TaScq2Uf" />
        
      <Switch>
        <Route exact path="/deliveries" component={Deliveries} />
        <Route path="/crisps" component={Crisps} />
        <Route path="/biscuits" component={Biscuits} />
        <Route path="/sweets" component={Sweets} />
        <Route path="/chocolates" component={Chocolates} />
        <Route path="/others" component={Others} />
        <Route exact path="/all" component={All} />
        <Route exact path="/" component={Verify}/>
        <Route component={PageNotFound} />
      </Switch>

      </Router>
    </DataProvider>  
    </>
  );
}

export default App;
