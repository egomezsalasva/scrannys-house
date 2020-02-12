//Import Libraries
import React from 'react'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'


//Styles
const ProductCardContainer = styled.div`
    position: relative;
    width: 240px;
    height: 330px;
    margin: 50px 40px 0;
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
const ProductDetailsContainer = styled.div`
    height: calc( 30px + 5px + 15px + 10px + 10px);
    margin: 0 30px;
`
const Title = styled.h4`
    font-family: var(--scrannysFontBold);
    font-size: 12px;
    /* margin: 0 30px; */
    line-height: 15px;
`
const Weight = styled.p`
    font-family: var(--scrannysFontLight);
    font-size: 12px;
    line-height: 15px;
    margin-top: 5px;
`
const Stock = styled.p`
    font-family: var(--scrannysFontLight);
    font-size: 10px;
    line-height: 15px;
    margin-top: 8px;
    span{
        color: var(--scrannysGreen);
    }
`
const ProductFooterContainer = styled.div`
   height: calc(34px);
   margin: 10px 30px 0;
`
const Price = styled.div`
    display: inline-block;
    line-height: 34px;
    transform: translateY(1px);
    font-family: var(--scrannysFontLight);
    font-size: 18px;
    letter-spacing: 0.9px;
`
const AddItemButton = styled.div`
    display: inline-block;
    width: 80px;
    height: 34px;
    position: absolute;
    right: 30px;
    background: var(--scrannysBlue);
    border-radius: 5px;
`
const AddItemTitle = styled.h3`
    font-family: var(--scrannysFontLight);
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

    const { image, title, weight, stock, price, cartQuantity} = props

  return (
    <>
      <ProductCardContainer>

        <ImageContainer>
            <img src={image} alt=""/>
        </ImageContainer>

        <ProductDetailsContainer>
            <Title>
                {/* BUG When it clamps it reizes to 1 line instead of showing 2 and clamping */}
                <LinesEllipsis text={title} maxLine='2' ellipsis=' ...' basedOn='words'/>
            </Title>
            <Weight>{weight}</Weight>
            <Stock><span>{stock}</span> left in stock</Stock>
        </ProductDetailsContainer>

        <ProductFooterContainer>
            <Price>€ {price}</Price>
            <AddItemButton>
                <AddItemTitle>{cartQuantity} +</AddItemTitle>
            </AddItemButton>
        </ProductFooterContainer>
        
      </ProductCardContainer>
    </>
  );
}

export default ProductCard;
