//Import Libraries
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
//Import Context API
import { ProductProvider, ProductConsumer } from './context' 
//Import Components
import HeaderBar from './componets/HeaderBar'
import CartGuide from './componets/cartGuide/CartGuide'
import All from './pages/All'
import PageNotFound from './pages/PageNotFound'


//Main Component
function App() {
  return (
    <>
    <ProductProvider>
      <Router>

      <HeaderBar />
      <ProductConsumer>
        { value => {
          return <CartGuide stripeToken="pk_test_THMmkRyxUjPhHmv4shPG6fM900TaScq2Uf" valueProp={value}/>
        }}
        
      </ProductConsumer>
     

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
    </ProductProvider>  
    </>
  );
}

export default App;
