//Import Libraries
import React from 'react';
import styled from 'styled-components'


//Styles
const ProductBoxContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    background: var(--scrannysRed);
    margin-bottom: 5px;
`
const ProductTitle = styled.p`
    display: inline-block;
    font-family: var(--scrannysFontLight);
    font-size: 11px;
    letter-spacing: 0.83px;
    line-height: 14px;
    width: 100%;
    padding: 0 30px;
    color: var(--scrannysLightWhite);
    /* height: 40px; */
    margin-top: 13px;
    /* margin-left: 30px; */
    text-align: center
`

//Main Component
const CantCheckoutBox = () => {
    return (
        <>
        <ProductBoxContainer>
            <ProductTitle>Cant checkout as a guest please enter a valid post code if you with to purchase our products. You can check if you are on our delivery area on our DELIVERIES page</ProductTitle>        
        </ProductBoxContainer>
        </>
    ) 
}

export default CantCheckoutBox;
