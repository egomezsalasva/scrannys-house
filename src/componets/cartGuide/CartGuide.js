//Import Libraries
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components'
//Import Context API (Data)
import { DataContext } from '../../context'
//Import Components
import ProductBox from './ProductBox'
import NoProductsBox from './NoProductsBox';
import CantCheckoutBox from './CantCheckoutBox'


//Styles
const CartGuideContainer = styled.div`
    width: 320px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 80px;
    background: var(--scrannysOrange50);
`
const TitleContainer = styled.div`
    height: 80px;
    width: 100%;
`
const Title = styled.h1`
    font-family: 'Montserrat-SemiBold';
    font-size: 22px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    line-height: 80px;
`
const ProductsContainer = styled.div`
    height: calc(100vh - 80px - 80px);
    width: 100%;
    overflow-y: scroll;
`
const TotalCheckoutBar = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: 0;
    background: var(--scrannysOrange);
    h1{
        display: inline-block;
    }
`
const TotalTitle = styled.div`
    display: inline-block;
    font-family: var(--scrannysFontLight);
    font-size: 16px;
    color: var(--scrannysBlue);
    letter-spacing: 1px;
    line-height: 80px;
    padding-left: 20px;
`
const TotalPrice = styled.div`
    display: inline-block;
    font-family: var(--scrannysFontBold);
    font-size: 18px;
    color: var(--scrannysBlue);
    letter-spacing: 1px;
    line-height: 80px;
    padding-left: 5px;
`
const CheckoutButton = styled.button`
   text-transform: uppercase;
   width: 120px;
   height: 38px;
   line-height: 38px;
   top: 50%;
   transform: translateY(-50%);
   background: var(--scrannysBlue);
   color: var(--scrannysLightWhite);
   border-radius: 5px;
   position: absolute;
   right: 20px;
   text-align: center;
   font-family: var(--scrannysFontLight);
   font-size: 14px;
   letter-spacing: 1.17px;
   outline: none;
   border: none;
   cursor: pointer;
`

//Main Component
function CartGuide({stripeToken}) {

    const dataContext = useContext(DataContext)

    const [stripe, setStripe] = useState(null)

    useEffect(() => {
        if(window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])

    const stripeCheckout = () => {
        stripe.redirectToCheckout({
            items: dataContext.cartProducts.map( item => ({ sku: item.sku, quantity: item.cartQuantity, })),
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
    }

    const CartBoxes = () => {
        if(dataContext.cartProducts.length > 0 ){
            return (
                dataContext.cartProducts.map( product => {
                return <ProductBox
                            key={product.id}
                            productData={product}
                        />    
                })
            )
        } else {
            return <NoProductsBox/> 
        }
    }

    
    return (
        <>
        <CartGuideContainer>

            <TitleContainer><Title>Your Cart</Title></TitleContainer>
            
            <ProductsContainer>
                { dataContext.isGuest ?  <CantCheckoutBox /> : null }
                <CartBoxes />
            </ProductsContainer>

            <TotalCheckoutBar>
                <TotalTitle>Total:</TotalTitle>
                <TotalPrice>{"€ " + dataContext.cartTotal}</TotalPrice>

                <CheckoutButton onClick={() => stripeCheckout()}>Checkout</CheckoutButton>
            </TotalCheckoutBar>

        </CartGuideContainer>
        </>
    )
}

export default CartGuide;
