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
        cart: [],
        cartTotal: 0,
    }

    //CREATING COPY OF DB DATA
    //(we want original DB to only be edited once the payment has been accepted)
        //Once the componet is mounted insert temporary products for user to edit (copy of original DB)
        componentDidMount(){
            this.setTempProducts()
        }
        //Create a copy of the Product DB in order to edit without overwriting initial DB. 
        //Send the products to the empty products array in state.
        setTempProducts = () => {
            //Initialize with empty array
            let tempProducts = []
            PRODUCTS_DB.forEach( product => {
                //Creates copy of products in DB
                const singleProduct = {...product}
                //Adds each copy to the empty array
                tempProducts = [...tempProducts, singleProduct]
            })
            //Pastes copy to state
            this.setState( () => {
                return{products: tempProducts}
            })
        }
    //

    //FIND CORRECT PRODUCT FROM PRODUCTS STATE ARRAY
    getProductThroughID = idArg => {
        //See if Product ID from state matches the argument
        const productThroughID = this.state.products.find( product => product.id === idArg )
        //Return match
        return productThroughID
    }
      
    
    //EVENT HANDLERS
    incrementQuantity = id => {

        var tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getProductThroughID(id))
        const product = tempProducts[index]

        //Check if stock is greater than 0
        if(product.stockQuantity > 0){
            product.inCart = true
            //Increment Quantity
            product.cartQuantity += 1
            //Decrement Stock
            product.stockQuantity -= 1
            //Calculate new Total Price of Item
            product.totalPrice = (product.price * product.cartQuantity).toFixed(2)

        } else {
            product.inStock = false
        }


        //Set the new values
        this.setState( () => {
            return { products: tempProducts, cart: [...this.state.cart, product]   }
        }, () => { this.calculateCartTotal( )})
    }

    decrementQuantity = id => {

        var tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getProductThroughID(id))
        const product = tempProducts[index]

        //Decrement Quantity
        product.cartQuantity -= 1
        //Increment Stock
        product.stockQuantity += 1
        product.inStock = true
        //Calculate new Total Price
        product.totalPrice = (product.price * product.cartQuantity).toFixed(2)

        if(product.cartQuantity === 0){
            product.inCart = false
        }
        
        //Set the new values
        this.setState( () => {
            return { products: tempProducts }
        }, () => { this.calculateCartTotal( )})
    }

    calculateCartTotal = () => {

        let cartTotal = 0
        this.state.products.map( item => cartTotal += parseFloat(item.totalPrice) )

        this.setState( () => {
            return{ cartTotal: parseFloat(cartTotal).toFixed(2) }
        })
    }


    render() {
        return(
            <ProductContext.Provider value={{
                // ...this.state,
                products: this.state.products,
                cartTotal: this.state.cartTotal,
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