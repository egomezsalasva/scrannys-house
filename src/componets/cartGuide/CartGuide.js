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
    background: var(--scrannysOrange50);
`
const TitleContainer = styled.div`
    height: 80px;
    width: 100%;
`
const Title = styled.h1`
    font-family: 'Montserrat-SemiBold';
    font-size: 22px;
    color: var(--scrannysBlue);
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

  const arrayOfProducts = [
        {
            title: "Walkers Prawn Cocktail",
            weight: "25g",
            priceOfItem: 0.80,
        },
        {
            title: "Jaffa Cakes Cake Bar",
            weight: "30g",
            priceOfItem: 0.70,
        },
    ]  
  const [quantity, setQuantity] = useState(2)
  const addQuantity = () => setQuantity(quantity + 1) 
  const minusQuantity = () => setQuantity(quantity - 1) 

  return (
    <>
    <CartGuideContainer>

        <TitleContainer>
            <Title>Your Cart</Title>
        </TitleContainer>
        
        <ProductsContainer>
            { arrayOfProducts.map( product => {
                return <ProductBox 
                            title={product.title}
                            weight={product.weight}
                            price={(product.priceOfItem * quantity).toFixed(2)}
                            quantity={quantity}
                            addQuantity={addQuantity}
                            minusQuantity={minusQuantity}
                            key={product.title}
                        />
            })}
        </ProductsContainer>

        <TotalCheckoutBar>

        </TotalCheckoutBar>
    </CartGuideContainer>
    </>
  )
}

export default CartGuide;
