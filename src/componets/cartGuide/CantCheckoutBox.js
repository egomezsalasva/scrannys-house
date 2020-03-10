//Import Libraries
import React from 'react';
import styled from 'styled-components'


//Styles
const ProductBoxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 140px;
    background: var(--scrannysRed);
    margin-bottom: 5px;
`
const ProductTitle = styled.p`
    display: inline-block;
    font-weight: var(--scrannysFontLight);
    font-size: 11px;
    letter-spacing: 0.83px;
    line-height: 14px;
    width: 100%;
    padding: 0 20px;
    color: var(--scrannysLightWhite);
    margin-top: 13px;
    text-align: center;
`

//Main Component
const CantCheckoutBox = () => {
    return (
        <>
        <ProductBoxContainer>
            <ProductTitle>Can't checkout as a guest please enter a valid post code to purchase our products. Check the delivery area in <br/>  OUR DELIVERIES PAGE <br/> or <br/> VERIFY YOUR POST CODE HERE </ProductTitle>        
        </ProductBoxContainer>
        </>
    ) 
}

export default CantCheckoutBox;
