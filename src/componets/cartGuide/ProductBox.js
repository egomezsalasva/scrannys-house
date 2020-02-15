//Import Libraries
import React from 'react';
import styled from 'styled-components'
//Import Data
import {ProductConsumer} from '../../context';
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
    font-family: var(--scrannysFontLight);
    font-size: 11px;
    letter-spacing: 0.83px;
    line-height: 14px;
    width: 190px;
    height: 40px;
    margin-top: 20px;
    margin-left: 30px;
`
const ProductPrice = styled.p`
    display: inline-block;
    font-family: var(--scrannysFontLight);
    font-size: 18px;
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
    font-family: var(--scrannysFontLight);
    font-size: 18px;
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
const CounterButton = styled.button`
    width: 30px;
    height: 30px;
    background: var(--scrannysBlue);
    border-radius: 5px;
    outline: none;
    border: none;
    opacity: ${ props => props.disabled ? 0.25 : 1 };
    cursor: pointer;
    img{
        position: absolute;
        top: 50%;
        left: 50%;
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

  const { id, title, weight, price, cartQuantity, stockQuantity,  } = props.productData

  if(cartQuantity > 0){
    return (
        <>
        <ProductBoxContainer>
    
            <ProductTitle>{title}<br/>{weight}</ProductTitle>
            <ProductPrice>€ {(price * cartQuantity).toFixed(2)}</ProductPrice>
            <ProductQuantity>{cartQuantity}</ProductQuantity>    
            <CounterButtons>
                <ProductConsumer>
                    { value => {
                        if( stockQuantity > 0) {
                            return  <AddButton onClick={ () => value.incrementQuantity(id) }>
                                        <img src={plusIcon} alt="plus icon"/>
                                    </AddButton>
                        } else {
                            return  <AddButton disabled>
                                        <img src={plusIcon} alt="plus icon"/>
                                    </AddButton>
                        }  
                    }}
                </ProductConsumer>
                <ProductConsumer>
                    { value => {
                        if( cartQuantity > 0) {
                            return  <SubtractButton 
                                        onClick={ () => value.decrementQuantity(id) }
                                        style={cartQuantity === 1 ? {background: "var(--scrannysRed)" } : {background: "var(--scrannysBlue)"}} 
                                    >
                                        <img src={cartQuantity === 1 ? crossIcon : minusIcon} alt="minus icon"/>
                                        {/* <img src={minusIcon} alt="minus icon"/> */}
                                    </SubtractButton>
                        }  
                    }}
                </ProductConsumer>
            </CounterButtons>
    
        </ProductBoxContainer>
        </>
      )
  }
  return null

}

export default ProductBox;
