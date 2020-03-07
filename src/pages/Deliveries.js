//Import Libraries
import React from 'react'
import styled from 'styled-components' 


//Styles
const RightContainer = styled.div`
    position: absolute;
    width: calc(100vw - 320px - 80px);
    min-height: 100vh;
    top: 0;
    right: 0;
    overflow-y: scroll;
`
const Title = styled.h2`
    width: 100%;
    margin-top: 90px;
    text-transform: uppercase;
    text-align: center;
    font-family: 'Montserrat-ExtraBold';
    font-size: 28px;
    letter-spacing: 4.3px;
`
const MapContainer = styled.div`
    width: 760px;
    height: 430px;
    margin-top: 60px;
    margin-left: 140px;
    background: var(--scrannysOrange);
    iframe{
      margin-top: 10px;
      margin-left: 10px;
      border: none;
    }
`

//Main Component
function Deliveries() {
  return (
    <>
    <RightContainer>

      {/* <LogoProducts><img src={logoProducts} alt="logo" /></LogoProducts> */}

      <Title>Delivery Area</Title>

      <MapContainer>
        <iframe src="https://www.google.com/maps/d/embed?mid=1M5piK7yT_GKICW93HJC5jJXElUHliv6G" width="740" height="410"></iframe>
      </MapContainer>
      
    </RightContainer>
    </>
  );
}

export default Deliveries;
