//Import Libraries
import React, { useState, useEffect, useReducer } from 'react'
//Import Data from DB
import PRODUCTS_DB from './data/data'


//Create Context API Object
export const DataContext = React.createContext()



//Provider
export function DataProvider({children}) {

    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [cartTotal, setCartTotal] = useState(0)
    const [isGuest, setIsGuest] = useState(true)

    // let reducer = (info, newInfo) => {
    //     if (newInfo === null) {
    //         localStorage.removeItem("info");
    //         return isGuest;
    //     }
    //     return { ...info, ...newInfo };
    // }

    // const localState = JSON.parse(localStorage.getItem("info"))
    // const [isGuestLocal] = useReducer(reducer, localState || isGuest)
    // useEffect(() => {
    //     localStorage.setItem("info", JSON.stringify(isGuestLocal));
    // }, [isGuestLocal]);


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
        //Returns object match
        return productThroughID
    }

    //CALCULATE TOTAL
    const calculateCartTotal = () => {
        let cartTotal = products.reduce( (acc, item) => acc + item.cartQuantity * item.price, 0.0)
        setCartTotal(cartTotal.toFixed(2))
    }

    //EVENT LISTENERS
    const incrementQuantity = id => {

        const tempProducts = [...products]
        const index = tempProducts.indexOf(getProductThroughID(id))
        const targetedProduct = tempProducts[index]

        if(targetedProduct.cartQuantity === 0){
            targetedProduct.inCart = true
            targetedProduct.cartQuantity = 1
            //ADD element to cartProducts array
            setCartProducts([...cartProducts, targetedProduct])
        } else if ( targetedProduct.cartQuantity > 0 && targetedProduct.stockQuantity > 0) {
            targetedProduct.cartQuantity += 1
            targetedProduct.stockQuantity -= 1
            //EDIT element in cartProducts array
            setCartProducts([...cartProducts])
        }

        calculateCartTotal()
    }

    const decrementQuantity = id => {

        const tempProducts = [...products]
        const index = tempProducts.indexOf(getProductThroughID(id))
        const targetedProduct = tempProducts[index]

        if(targetedProduct.cartQuantity === 1){
            targetedProduct.inCart = false
            targetedProduct.cartQuantity = 0
            cartProducts.splice( cartProducts.indexOf(getProductThroughID(id)), 1 )
            //DELETE element to cartProducts array
            setCartProducts([...cartProducts])
        } else if ( targetedProduct.cartQuantity > 1) {
            targetedProduct.cartQuantity -= 1
            targetedProduct.stockQuantity += 1
            //EDIT element in cartProducts array
            setCartProducts([...cartProducts])
        }
        calculateCartTotal()
        // //Calculate new Total Price
        // product.totalPrice = (product.price * product.cartQuantity).toFixed(2)   
    }

    //VERIFY POST CODE
    const validPostCodes = [
        "08001",
        "08002",
        "08003",
        "08005",
        "08007",
        "08008",
        "08009",
        "08010",
        "08011",
        "08012",
        "08013",
        "08015",
        "08018",
        "08019",
        "08025",
        "08026",
        "08036",
        "08037",
    ]

    //BUG if the user types a valid post code and then changes to non valid still results in false
    //Possibly issue with useEffect
    const checkPostCodeMatch = postCodeInput => {
        validPostCodes.map( postCode => {
            if(postCodeInput === postCode){
                setIsGuest(false)
            }
        })
    }


    //Format cartProducts.cartquantity if float ends in 00 (eg. €1.00) remove the .00
   

    return(
        <DataContext.Provider value={{
            products,
            cartProducts,
            cartTotal,
            incrementQuantity,
            decrementQuantity,
            checkPostCodeMatch,
            isGuest,
            setIsGuest,
        }}>
            {children}
        </DataContext.Provider>
    )
}








    

    

    







