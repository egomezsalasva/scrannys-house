//Import Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
//Import Images
import logoVerify from '../assets/logoVerify.svg'
import textureScrannys from '../assets/textureScrannys.png'

//Styles
const VerifyModalContaier = styled.div`
    position: fixed;
    background: #FEF6EE url(${textureScrannys});
    background-size: 200px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
`
const LogoProducts = styled.div`
    width: 100%;
    height: 140px;
    margin-top: 100px;
    img{
    position: absolute;
    height: 140px;
    left: 50%;
    transform: translateX(calc(-50% - 10px));
    }
`
const VerifyText = styled.p`
    font-family: 'Montserrat-SemiBold';
    line-height: 15px;
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    text-transform: uppercase;
`
const VerifyAreaText = styled(VerifyText)`
    margin-top: 70px;
`
const VerifyOrText = styled(VerifyText)`
    margin-top: 30px;
`
const FormValidationContainer = styled.div`
    margin-top: 30px;
    text-align: center;
`
const FormBox = styled.div`
    background: var(--scrannysOrange50over50);
    padding: 12px;
    border-radius: 5px;
    display: inline-block;
`
const CityBox = styled.div`
    width: 180px;
    height: 46px;
    background: var(--scrannysOrange50);
    border-radius: 5px;
    font-family: 'Montserrat-SemiBold';
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    transform: translateY(1px);
    text-transform: uppercase;
    display: inline-block;
`
const PostalBox = styled.div`
    width: 180px;
    height: 46px;
    background: var(--scrannysOrange50);
    border-radius: 5px;
    font-family: 'Montserrat-SemiBold';
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    transform: translateY(1px);
    text-transform: uppercase;
    display: inline-block;
    margin-left: 16px;
`
const VerifyButton = styled(Link)`
    width: 270px;
    height: 46px;
    background: var(--scrannysBlue);
    border-radius: 5px;
    font-family: 'Montserrat-SemiBold';
    font-size: 12px;
    color: var(--scrannysLightWhite);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    transform: translateY(1px);
    text-transform: uppercase;
    display: inline-block;
    margin-left: 16px;
    text-decoration: none;
    cursor: pointer;
`
const EnterGuestContainer = styled.div`
    margin-top: 15px;
    text-align: center;
`
const GuestButton = styled(Link)`
    margin-top: 30px;
    font-family: 'Montserrat-ExtraBold';
    line-height: 15px;
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
`

//Main Component
function Verify() {
    return (
        <>
        <VerifyModalContaier>
            <LogoProducts><img src={logoVerify} alt="logo" /></LogoProducts>
            <VerifyAreaText>PLEASE VERIFY YOU ARE WITHIN OUR DELIVERY AREA</VerifyAreaText>
            <FormValidationContainer>
                <FormBox>
                    <CityBox>Barcelona</CityBox>
                    <PostalBox>Enter Post Code</PostalBox>
                    <VerifyButton to="/all">VISIT SCRANNY’S HOUSE</VerifyButton>
                </FormBox>
            </FormValidationContainer>
            <VerifyOrText>OR</VerifyOrText>
            <EnterGuestContainer>
                <GuestButton to="/deliveries">VISIT AS A GUEST</GuestButton>
            </EnterGuestContainer>
            

        </VerifyModalContaier>
        </>
    )
}

export default Verify;
