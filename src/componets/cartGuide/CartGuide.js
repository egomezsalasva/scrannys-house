//Import Libraries
import React, {useState} from 'react';
import styled from 'styled-components'
//Import Components
import ProductBox from './ProductBox'

//Styles
const CartGuideContainer = styled.div`
    width: 320px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 80px;
    background: #FCE0C4;
`
const TitleContainer = styled.div`
    height: 80px;
    width: 100%;
`
const Title = styled.h1`
    font-family: 'Montserrat-SemiBold';
    font-size: 22px;
    color: #1C1B3A;
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
    background: #F9C18A;
`

//Main Component
function CartGuide() {

  const [quantity, setQuantity] = useState(2)
  const priceOfItem = 0.80
  const title = "Walkers Prawn Cocktail"
  const weight = "25g"

  const addQuantity = () => setQuantity(quantity + 1) 
  const minusQuantity = () => setQuantity(quantity - 1) 

    
  return (
    <>
    <CartGuideContainer>

        <TitleContainer>
            <Title>Your Cart</Title>
        </TitleContainer>
        
        <ProductsContainer>
            <ProductBox 
                title={title}
                weight={weight}
                price={(priceOfItem * quantity).toFixed(2)}
                quantity={quantity}
                addQuantity={addQuantity}
                minusQuantity={minusQuantity}
            />
        </ProductsContainer>

        <TotalCheckoutBar>

        </TotalCheckoutBar>
    </CartGuideContainer>
    </>
  );
}

export default CartGuide;
