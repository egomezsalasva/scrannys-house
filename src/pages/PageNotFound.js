//Import Libraries
import React from 'react';
import styled from 'styled-components';

//Styles
const RightContainer = styled.div`
    position: absolute;
    width: calc(100vw - 320px - 80px);
    min-height: 100vh;
    top: 0;
    right: 0;
    overflow-y: scroll;
`
const Heading = styled.h1`
  width: 100%;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
`


//Main Component
function PageNotFound() {
  return (
    <>
    <RightContainer>
     <Heading>Page Not Found</Heading>
    </RightContainer>
    </>
  );
}

export default PageNotFound;
