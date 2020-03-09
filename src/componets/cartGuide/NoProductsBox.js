//Import Libraries
import React from 'react';
import styled from 'styled-components'


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
    font-weight: var(--scrannysFontLight);
    font-size: 11px;
    letter-spacing: 0.83px;
    line-height: 14px;
    width: 190px;
    height: 40px;
    margin-top: 20px;
    margin-left: 30px;
`

//Main Component
const NoProductsBox = () => {
    return (
        <>
        <ProductBoxContainer>
            <ProductTitle>No Products in the Cart</ProductTitle>        
        </ProductBoxContainer>
        </>
    ) 
}

export default NoProductsBox;
