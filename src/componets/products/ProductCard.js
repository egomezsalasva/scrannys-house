//Import Libraries
import React, { useContext } from 'react'
import styled from 'styled-components'
import LinesEllipsis from 'react-lines-ellipsis'
//Import Context API (Data)
import { DataContext } from '../../context'


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
    position: relative;
    height: calc( 30px + 5px + 15px + 10px + 10px);
    margin: 0 30px;
`
const Title = styled.h4`
    font-weight: var(--scrannysFontBold);
    font-size: 12px;
    /* margin: 0 30px; */
    line-height: 15px;
`
const Weight = styled.p`
    font-weight: var(--scrannysFontLight);
    font-size: 12px;
    line-height: 15px;
    margin-top: 5px;
`
const Stock = styled.p`
    position: absolute;
    bottom: 0;
    font-weight: var(--scrannysFontLight);
    font-size: 10px;
    line-height: 15px;
    margin-top: 8px;
    span{
        font-weight: var(--scrannysFontBold); 
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
    font-weight: var(--scrannysFontLight);
    font-size: 18px;
    letter-spacing: 0.9px;
`
const AddItemButton = styled.button`
    display: inline-block;
    width: 80px;
    height: 34px;
    position: absolute;
    right: 30px;
    /* background: ${props => props.disabled ? "var(--scrannysRed)" : "var(--scrannysBlue)"}; */
    background: var(--scrannysBlue);
    border-radius: 5px;
    outline: none;
    border: none;
    opacity: ${props => props.disabled ? 0.5 : 1};
    cursor: ${ props => props.disabled ? "auto" : "pointer" };
`
const AddItemTitle = styled.h3`
    font-weight: var(--scrannysFontLight);
    font-size: 18px;
    color: var(--scrannysLightWhite);
    letter-spacing: 0.9px;
    text-align: center;
    width: 80px;
    line-height: 34px;
`


//Interior Components
function IncrementButton({id, stockQuantity, cartQuantity,}){

    const dataContext = useContext(DataContext)

    if(stockQuantity > 0) {
        return  <AddItemButton onClick={ () => dataContext.incrementQuantity(id) }>
                    <AddItemTitle>{cartQuantity} +</AddItemTitle>
                </AddItemButton>
    } else {
        return  <AddItemButton disabled>
                    <AddItemTitle>{cartQuantity} +</AddItemTitle>
                </AddItemButton>
    }
}


//Main Component
function ProductCard({productData}) {

  const { id, image, title, weight, stockQuantity, price, cartQuantity } = productData

  return (
    <>
      <ProductCardContainer>

        <ImageContainer>
            <img src={image} alt={title}/>
        </ImageContainer>

        <ProductDetailsContainer>
            <Title>
                {/* BUG When it clamps it reizes to 1 line instead of showing 2 and clamping */}
                <LinesEllipsis text={title} maxLine='2' ellipsis=' ...' basedOn='words'/>
            </Title>
            <Weight>{weight}</Weight>
            <Stock>
                <span style={ stockQuantity > 0 ? {color: "var(--scrannysGreen)"} : {color: "var(--scrannysRed)"}} >
                    {stockQuantity}
                </span> in stock    
            </Stock>
        </ProductDetailsContainer>

        <ProductFooterContainer>
            <Price>€ {price}</Price>
            <IncrementButton id={id} stockQuantity={stockQuantity} cartQuantity={cartQuantity}/>
        </ProductFooterContainer>
        
      </ProductCardContainer>
    </>
  );
}

export default ProductCard;
