//Import Libraries
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { gsap } from "gsap"
//Import Images
import logoHeader from '../assets/logoHeader.svg'
import instagramLogo from '../assets/instagram.svg'


//Styles
const BarContainer = styled.div`
    width: 80px;
    height: 100vh;
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    background: var(--scrannysBlue);
    z-index: 1000;
`
const Logo = styled.img`
    position: absolute;
    top: 13px;
    width: 60px;
    left: 9px;
`
const Nav = styled.nav`   
`
const MunchiesButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translate(calc(-50% + 40px), calc(-50% - 70px)) rotate(90deg);
    width: 140px;
    height: 80px;
    background: var(--scrannysGreen);
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
`
const MunchiesSubmenu = styled.div`
    position: fixed;
    width: 320px;
    height: 100vh;
    background: var(--scrannysGreen);
    left: 80px;
    top: 0;
    z-index: 500;
    transform: translateX(-320px);
`
const MunchiesNav = styled.div`
    margin-top: calc(50vh);
    transform: translateY(-50%);

`
const MunchiesLink = styled(Link)`
    display: block;
    font-weight: var(--scrannysFontLight);
    font-size: 18px;
    color: var(--scrannysWhite);
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 18px;
    padding: 5px 0;
    margin: 5px 0;
    text-transform: uppercase;
    text-decoration: none;
`
const DeliveryButton = styled(Link)`
    position: absolute;
    top: 50%;
    transform: translate(calc(-50% + 40px), calc(-50% + 140px - 70px)) rotate(90deg);
    width: 140px;
    height: 80px;
    background: var(--scrannysRed);
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
`
const ButtonText = styled.div`
    transform: rotate(180deg);
    text-align: center;
    line-height: 80px;
    text-transform: uppercase;
    font-weight: var(--scrannysFontLight);
    font-size: 14px;
    color: var(--scrannysWhite);
    letter-spacing: 1.17px;
`
const InstagramButton = styled.div`
    position: absolute;
    bottom: 20px;
    width: 40px;
    height: 40px;
    background: var(--scrannysBlue);
    border-radius: 5px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    img{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
`

//Main Component
function HeaderBar() {

    //BUG Animation not working on netlify
    let submenuRef = useRef(null);
    let submenuTl = gsap.timeline( {paused: true, reversed: true} )
      
    useEffect( () => {
        submenuTl.to( submenuRef, 0.5, { x: 0 } )
    }, [submenuTl])

    const submenuToggle = () => {
        submenuTl.reversed() ? submenuTl.play() : submenuTl.reverse()
    }

    return (
        <>
        <BarContainer>
            <Logo src={logoHeader}/>
            <Nav>
                <MunchiesButton onClick={ () =>  submenuToggle() }>
                    <ButtonText>Munchies</ButtonText>
                </MunchiesButton>
                <DeliveryButton to="/deliveries" onClick={ () =>  submenuTl.reverse() }>
                    <ButtonText>Deliveries</ButtonText>
                </DeliveryButton>
            </Nav>
            <a href="https://www.instagram.com/scrannyshouse/" target="_blank">
                <InstagramButton>
                    <img src={instagramLogo} alt="instagram logo" />
                </InstagramButton>
            </a>
        </BarContainer>
        <MunchiesSubmenu ref={ e => submenuRef = e } >
            <MunchiesNav>
                <MunchiesLink to="/all" onClick={ () =>  submenuTl.reverse() }>All</MunchiesLink>
                <MunchiesLink to="/crisps" onClick={ () =>  submenuTl.reverse() }>Crisps</MunchiesLink>
                <MunchiesLink to="/biscuits" onClick={ () =>  submenuTl.reverse() }>Biscuits</MunchiesLink>
                <MunchiesLink to="/chocolates" onClick={ () =>  submenuTl.reverse() }>Chocolates</MunchiesLink>
                <MunchiesLink to="/sweets" onClick={ () =>  submenuTl.reverse() }>Sweets</MunchiesLink>
                <MunchiesLink to="/others" onClick={ () =>  submenuTl.reverse() }>Others</MunchiesLink>
            </MunchiesNav>
        </MunchiesSubmenu>
        </>
    );
}

export default HeaderBar;
