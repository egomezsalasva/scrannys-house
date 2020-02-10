//Import Libraries
import React from 'react';
import styled from 'styled-components'
//Import Images
import plusIcon from '../../assets/plusIcon.svg'
import minusIcon from '../../assets/minusIcon.svg'
import crossIcon from '../../assets/crossIcon.svg'


//Styles
const ProductBoxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    background: var(--scrannysOrange50over50);
    margin-bottom: 5px;
`
const ProductTitle = styled.p`
    display: inline-block;
    font-family: 'Montserrat-SemiBold';
    font-size: 11px;
    color: var(--scrannysBlue);
    letter-spacing: 0.83px;
    line-height: 14px;
    width: 190px;
    height: 40px;
    margin-top: 20px;
    margin-left: 30px;
`
const ProductPrice = styled.p`
    display: inline-block;
    font-family: 'Montserrat-SemiBold';
    font-size: 18px;
    color: var(--scrannysBlue);
    letter-spacing: 1.5px;
    line-height: 12px;
    margin-top: 10px;
    margin-left: 30px;
    width: 190px;
`
const ProductQuantity = styled.div`
    position: absolute;
    top: 0;
    left: 220px;
    width: 50px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-family: 'Montserrat-SemiBold';
    font-size: 18px;
    color: var(--scrannysBlue);
    letter-spacing: 1.5px;
    transform: translateX(-1px);
`
const CounterButtons = styled.div`
    position: absolute;
    top: 15px;
    left: 270px;
    width: 30px;
    height: 70px;
`
const CounterButton = styled.div`
    width: 30px;
    height: 30px;
    background: var(--scrannysBlue);
    border-radius: 5px;
    img{
        margin-top: 50%;
        margin-left: 50%;
        transform: translate(-50%, -50%);
    }
`
const AddButton = styled(CounterButton)`
    position: absolute;
    top: 1px;
`
const SubtractButton = styled(CounterButton)`
    position: absolute;
    bottom: 1px;
`


//Main Component
function ProductBox(props) {

  const {title, weight, price, quantity, addQuantity, minusQuantity } = props

  if(quantity > 0){
    return (
        <>

        <ProductBoxContainer>
    
            <ProductTitle>{title}<br/>{weight}</ProductTitle>
            <ProductPrice>€ {price}</ProductPrice>
            <ProductQuantity>{quantity}</ProductQuantity>    
            <CounterButtons>
                <AddButton onClick={ addQuantity }><img src={plusIcon} alt="plus icon"/></AddButton>
                <SubtractButton onClick={ minusQuantity }><img src={quantity === 1 ? crossIcon : minusIcon} alt="minus icon"/></SubtractButton>
            </CounterButtons>
    
        </ProductBoxContainer>
        </>
      )
  }
  return null

}

export default ProductBox;
