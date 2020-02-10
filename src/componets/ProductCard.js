//Import Libraries
import React from 'react'
import styled from 'styled-components'
//Import Images
import walkersRoastChicken from '../assets/products/WalkersRoastChicken.png'


//Styles
const ProductCardContainer = styled.div`
    position: relative;
    width: 240px;
    height: 300px;
    margin: 60px 40px 0;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    img{
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0.5);
    }
`
const Title = styled.h4`
    font-family: 'Montserrat-ExtraBold';
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1px;
    margin: 0 30px;
    line-height: 15px;
`
const Weight = styled(Title)`
    margin-top: 2px;
`
const Price = styled.div`
    position: absolute;
    line-height: 34px;
    transform: translateY(1px);
    bottom: 20px;
    bottom: 15px;
    left: 30px;
    font-family: 'Montserrat-SemiBold';
    font-size: 18px;
    color: var(--scrannysBlue);
    letter-spacing: 0.9px;
`
const AddItemButton = styled.div`
    position: absolute;
    bottom: 20px;
    bottom: 15px;
    right: 30px;
    width: 80px;
    height: 34px;
    background: var(--scrannysBlue);
    border-radius: 5px;
`
const AddItemTitle = styled.h3`
    font-family: 'Montserrat-SemiBold';
    font-size: 18px;
    color: var(--scrannysLightWhite);
    letter-spacing: 0.9px;
    text-align: center;
    width: 80px;
    line-height: 34px;
    cursor: pointer;
`

//Main Component
function ProductCard(props) {

    const { image, title, weight, price, cartQuantity} = props

  return (
    <>
      <ProductCardContainer>
        <ImageContainer>
            <img src={image} alt=""/>
        </ImageContainer>
        <Title>{title}</Title>
        <Weight>{weight}</Weight>
        <Price>€ {price}</Price>
        <AddItemButton>
            <AddItemTitle>{cartQuantity} +</AddItemTitle>
        </AddItemButton>
      </ProductCardContainer>
    </>
  );
}

export default ProductCard;
