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
    /* position: absolute; */
    top: 0;
    left: 0;
    background: var(--scrannysBlue);
`
const Logo = styled.img`
    position: absolute;
    top: 13px;
    width: 60px;
    left: 9px;
`
// const MunchiesButton = styled.div`
//     width: 120px;
//     height: 80px;
//     background: red;
//     transform: rotate(-90deg);
//     position: absolute;
//     top: 0;
    
// `


//Main Component
function HeaderBar() {
  return (
    <>
    <BarContainer>
        <Logo src={logoHeader}/>
        {/* <MunchiesButton>Munchies</MunchiesButton> */}
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
