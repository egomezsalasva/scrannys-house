//Import Libraries
import React from 'react';
import styled from 'styled-components'


//Styles
const ProductBoxContainer = styled.div`
    /* position: relative; */
    /* width: 100%; */
    /* height: 100px; */
    background: var(--scrannysRed);
`
const ProductTitle = styled.p`
    display: inline-block;
    font-weight: var(--scrannysFontLight);
    font-size: 11px;
    letter-spacing: 0.83px;
    line-height: 80px;
    width: 100%;
    /* padding: 0 30px; */
    color: var(--scrannysLightWhite);
    /* margin-top: 13px; */
    text-align: center;
    text-transform: uppercase;
`

//Main Component
const MinimumOrderBox = () => {
    return (
        <>
        <ProductBoxContainer>
            <ProductTitle>Minimum Order of 10€</ProductTitle>        
        </ProductBoxContainer>
        </>
    ) 
}

export default MinimumOrderBox;
