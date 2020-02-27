//Import Libraries
import React, { useState, useEffect } from 'react'
//Import Data from DB
import PRODUCTS_DB from './data/data'


//Create Context API Object
export const DataContext = React.createContext()


//Provider
export function DataProvider({children}) {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState(0)

    //CREATING COPY OF DB DATA
    //(we want original DB to only be edited once the payment has been accepted)
        //Once the componet is mounted insert temporary products for user to edit (copy of original DB)
        useEffect(() => {
            setTempProducts()
        }, [])
        //Create a copy of the Product DB in order to edit without overwriting initial DB. 
        //Send the products to the empty products array in state.
        const setTempProducts = () => {
            //Initialize with empty array
            let tempProducts = []
            PRODUCTS_DB.forEach( item => {
                //Creates copy of products in DB
                const singleItem = {...item}
                //Adds each copy to the empty array
                tempProducts = [...tempProducts, singleItem]
            })
            //Pastes copy to state
            setProducts(tempProducts)
        }
    //

    //FIND CORRECT PRODUCT FROM PRODUCTS STATE ARRAY
    const getProductThroughID = idArg => {
        //See if Product ID from state matches the argument
        const productThroughID = products.find( product => product.id === idArg )
        //Return match
        return productThroughID
    }

    //CALCULATE TOTAL
    const calculateCartTotal = () => {
        let cartTotal = products.reduce( (acc, item) => acc + item.cartQuantity * item.price, 0.0)
        setCartTotal(cartTotal.toFixed(2))
    }

    const incrementQuantity = id => {

        let tempProducts = [...products]
        const index = tempProducts.indexOf(getProductThroughID(id))
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

        setProducts(tempProducts)
        setCart([...cart, product])
        calculateCartTotal()  

    }

    const decrementQuantity = id => {

        let tempProducts = [...products]
        const index = tempProducts.indexOf(getProductThroughID(id))
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

        // removeFromCart()
        
        //Set the new values
        setProducts(tempProducts)
        setCart([...cart, product])
        calculateCartTotal()

        console.log(cart)
    }

    const removeFromCart = () => {

        // let cartTotal = 0
        // this.state.products.map( item => cartTotal += parseFloat(item.totalPrice) )
        let cartTotal = this.state.products.reduce( (acc, item) => acc + item.cartQuantity * item.price, 0.0)

        this.setState( () => {
            // return{ cartTotal: parseFloat(cartTotal).toFixed(2) }
            return{ cartTotal: cartTotal.toFixed(2) }
        })
    }
   

    return(
        <DataContext.Provider value={{
            products,
            cart,
            cartTotal,
            incrementQuantity,
            decrementQuantity,
        }}>
            {children}
        </DataContext.Provider>
    )
}








    

    

    







