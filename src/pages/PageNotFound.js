//Import Libraries
import React from 'react';
import styled from 'styled-components';


const Heading = styled.h1`
  width: 100vw;
  height: 100vh;
  text-align: center;
  line-height: 100vh;
`


//Main Component
function PageNotFound() {
  return (
    <>
     <Heading>Page Not Found</Heading>
    </>
  );
}

export default PageNotFound;
