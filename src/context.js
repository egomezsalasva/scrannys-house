//Import Libraries
import React, {Component} from 'react'
//Import Data from DB
import PRODUCTS_DB from './data/data'


//Create Context API Object
const ProductContext = React.createContext()


//Provider
class ProductProvider extends Component {

    state = {
        products: PRODUCTS_DB
    }

    handleStock = () => {
        console.log("Handle stock change")
    }

    addToCart = () => {
        console.log("Handle add to cart")
    }

    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleStock: this.handleStock,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

//Consumer
const ProductConsumer = ProductContext.Consumer


export {ProductProvider, ProductConsumer}