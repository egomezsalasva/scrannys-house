//Import Libraries
import React from 'react';
import styled from 'styled-components'
//Import Context API (Data)
import { ProductConsumer } from '../../context'
//Import Components
import ProductBox from './ProductBox'


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
`


//Main Component
function CartGuide() {

  return (
    <>
    <CartGuideContainer>

        <TitleContainer>
            <Title>Your Cart</Title>
        </TitleContainer>
        
        <ProductsContainer>
            <ProductConsumer>
                { value => {
                    return value.products.map( product => {
                        return <ProductBox
                                    key={product.id}
                                    productData={product}
                                    incrementQuantity="" 
                                    decrementQuantity=""
                                />    
                    })
                }}
            </ProductConsumer>
        </ProductsContainer>

        <TotalCheckoutBar>

        </TotalCheckoutBar>
    </CartGuideContainer>
    </>
  )
}

export default CartGuide;
