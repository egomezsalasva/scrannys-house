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
    font-weight: var(--scrannysFontBold);;
    font-size: 28px;
    letter-spacing: 4.3px;
`
const MapContainer = styled.div`
    width: 760px;
    height: 430px;
    margin-top: 60px;
    text-align: center;
    background: var(--scrannysOrange);
    margin-left: 50%;
    transform: translateX(-50%);
    iframe{
      margin-top: 10px;
      border: none;
    }
`

//Main Component
function Deliveries() {
  return (
    <>
    <RightContainer>

      <Title>Delivery Area</Title>
      
      {/* //TODO google maps api */}

      <MapContainer>
        <iframe src="https://www.google.com/maps/d/embed?mid=1M5piK7yT_GKICW93HJC5jJXElUHliv6G" width="740" height="410" />
      </MapContainer>

      {/* //TODO text for times */}
      
    </RightContainer>
    </>
  );
}

export default Deliveries;
