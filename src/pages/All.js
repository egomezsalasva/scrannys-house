//Import Libraries
import React from 'react'
import styled from 'styled-components'
//Import Components
import ProductCard from '../componets/ProductCard'
//Import Images
import logoProducts from '../assets/logoProducts.svg'


//Styles
const ProductsContainer = styled.div`
    position: absolute;
    width: calc(100vw - 320px - 80px);
    min-height: 100vh;
    top: 0;
    right: 0;
    overflow-y: scroll;
`
const LogoProducts = styled.div`
    width: 100%;
    height: 140px;
    margin-top: 40px;
    img{
      position: absolute;
      height: 140px;
      left: 50%;
      transform: translateX(calc(-50% - 10px));
    }
`
const Title = styled.h2`
    width: 100%;
    margin-top: 30px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Montserrat-ExtraBold';
    font-size: 28px;
    color: #1C1B3A;
    letter-spacing: 4.3px;
`
const ProductListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 80px;
    
`

//Data


//Main Component
function All() {
  return (
    <>
      <ProductsContainer>

        <LogoProducts><img src={logoProducts} alt={logoProducts} /></LogoProducts>

        <Title>All</Title>

        <ProductListContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ProductListContainer>


      </ProductsContainer>
    </>
  );
}

export default All;
