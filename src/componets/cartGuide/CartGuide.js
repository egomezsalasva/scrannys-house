//Import Libraries
import React, { useState, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components'
import { gsap } from "gsap/all"
//Import Context API (Data)
import { DataContext } from '../../context'
//Import Components
import ProductBox from './ProductBox'
import NoProductsBox from './NoProductsBox'
import CantCheckoutBox from './CantCheckoutBox'
import MinimumOrderBox from './MinimumOrderBox'
import crossIcon from '../../assets/crossIcon.svg'


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
    font-weight: var(--scrannysFontLight);
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
    font-weight: var(--scrannysFontLight);
    font-size: 16px;
    color: var(--scrannysBlue);
    letter-spacing: 1px;
    line-height: 80px;
    padding-left: 20px;
`
const TotalPrice = styled.div`
    display: inline-block;
    font-weight: var(--scrannysFontBold);
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
   opacity: ${ props => props.disabled ? "0.5" : "1" };
   border-radius: 5px;
   position: absolute;
   right: 20px;
   text-align: center;
   font-weight: var(--scrannysFontLight);
   font-size: 14px;
   letter-spacing: 1.17px;
   outline: none;
   border: none;
   cursor: ${ props => props.disabled ? "auto" : "pointer" };
`
const MinimumOrderMessage = styled.div`
   position: absolute;
   width: 100%;
   height: 80px;
   bottom: 0;
`
const CloseButton = styled.div`
    position: absolute;
    right: 4px;
    top: 4px;
    width: 30px;
    height: 30px;
    background: var(--scrannysRed);
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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

    let minimimOrderRef = useRef(null);
    let minimumOrderTl = gsap.timeline({paused: true, reversed: true})
      
    useEffect( () => {
        minimumOrderTl.to( minimimOrderRef, { duration: 0.5, y: "-80px" } )
    }, [minimumOrderTl])

    const CheckoutButtonConditional = () => {
        if( dataContext.cartTotal >= 10 && dataContext.isGuest === false ){
            return <CheckoutButton onClick={() => stripeCheckout()} >Checkout</CheckoutButton>
        } else if (dataContext.isGuest === true) {
            return <CheckoutButton disabled >Checkout</CheckoutButton>
        } else {
            return <CheckoutButton onClick={ () => minimumOrderTl.play() } >Checkout</CheckoutButton>
        }
    }

    return (
        <>
        <CartGuideContainer>

            <TitleContainer><Title>Your Cart</Title></TitleContainer>
            
            <ProductsContainer>
                { dataContext.isGuest ?  <CantCheckoutBox /> : null }
                <CartBoxes />

                <MinimumOrderMessage ref={ e => minimimOrderRef = e }>
                    <CloseButton onClick={ () => minimumOrderTl.reverse() }>
                        <img src={crossIcon} alt="close icon" />
                    </CloseButton>
                    <MinimumOrderBox/>
                </MinimumOrderMessage>

            </ProductsContainer>

            <TotalCheckoutBar>
                <TotalTitle>Total:</TotalTitle>
                <TotalPrice>{"€ " + dataContext.cartTotal}</TotalPrice>

                <CheckoutButtonConditional />
            </TotalCheckoutBar>

            
        </CartGuideContainer>
        </>
    )
}

export default CartGuide;
