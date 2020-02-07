//Import Libraries
import React from 'react';
import styled from 'styled-components'
//Import Images
import logoHeader from '../assets/logoHeader.svg'

//Styles
const BarContainer = styled.div`
    width: 80px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #1C1B3A;
`
const Logo = styled.img`
    position: absolute;
    top: 13px;
    width: 60px;
    left: 9px;
`


//Main Component
function HeaderBar() {
  return (
    <>
    <BarContainer>
        <Logo src={logoHeader}/>
        {/* <Nav>
            <MunchiesNav>
                <MunchiesButton />
                <MunchiesSubmenu />
            </MunchiesNav>
            <DeliveryNav>
                <DeliveryButton />
            </DeliveryNav>
        </Nav> */}
    </BarContainer>
    </>
  );
}

export default HeaderBar;
