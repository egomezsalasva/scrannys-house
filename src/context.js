//Import Libraries
import React, {Component} from 'react'
//Import Data from DB
import PRODUCTS_DB from './data/data'


//Create Context API Object
const ProductContext = React.createContext()


//Provider
class ProductProvider extends Component {

    state = {
        products: [],
    }

    //CREATING COPY OF DB DATA
    //Once the componet is mounted insert temporary products for user to edit (copy of original DB)
    componentDidMount(){
        this.setTempProducts()
    }
    //Create a copy of the Product DB in order to edit without overwriting initial DB. 
    //Send the products to the empty products array in state.
    setTempProducts = () => {
        let tempProducts = []
        PRODUCTS_DB.forEach( item => {
            const singleItem = {...item}
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState( () => {
            return{products: tempProducts}
        })
    }

    //EVENT HANDLERS
    incrementQuantity = () => {
        console.log("Increment quantity / decrement stock / if it stock reaches 0 disable button")
    }
    decrementQuantity = () => {
        console.log("Decrement quantity / increment stock")
    }


    render() {
        return(
            <ProductContext.Provider value={{
                // ...this.state,
                products: this.state.products,
                incrementQuantity: this.incrementQuantity,
                decrementQuantity: this.decrementQuantity,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

//Consumer
const ProductConsumer = ProductContext.Consumer


export {ProductProvider, ProductConsumer}