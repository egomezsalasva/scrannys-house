//Import Libraries
import React, {useState} from 'react'
import styled from 'styled-components'
//Import Components
import ProductCard from '../componets/ProductCard'
//Import Images
import logoProducts from '../assets/logoProducts.svg'
//Import Data
import PRODUCTS_DB from '../data/data'


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
    letter-spacing: 4.3px;
`
const ProductListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: -10px;
    margin-bottom: 80px;
    
`

//Data


//Main Component
function All() {

  const [products, setProducts] = useState(PRODUCTS_DB)

  console.log(products)

  return (
    <>
      <ProductsContainer>

        <LogoProducts><img src={logoProducts} alt={logoProducts} /></LogoProducts>

        <Title>All</Title>

        <ProductListContainer>
          {PRODUCTS_DB.map( (product) => {
            return <ProductCard
                    key={product.id}
                    image={product.img}
                    title={product.title}
                    weight={product.weight}
                    stock={product.stockQuantity}
                    price={product.price}
                    cartQuantity={product.cartQuantity}
                  />
          })}
        </ProductListContainer>


      </ProductsContainer>
    </>
  );
}

export default All;
