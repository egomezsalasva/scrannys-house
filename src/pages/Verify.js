//Import Libraries
import React, { useState, useEffect, useContext, useRef } from 'react'
import styled from 'styled-components'
import { Link, matchPath } from "react-router-dom"
//Import Images
import logoVerify from '../assets/logoVerify.svg'
import instagramLogo from '../assets/instagram.svg'
import textureScrannys from '../assets/textureScrannys.png'
//Import Data
import { DataContext } from '../context'

//Styles
const VerifyModalContaier = styled.div`
    position: absolute;
    background: #FEF6EE url(${textureScrannys});
    background-size: 200px;
    width: 100vw;
    min-height: 100vh;
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
    font-weight: var(--scrannysFontLight);
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
    color: ${props => props.error ? "var(--scrannysRed)" : "var(--scrannysBlue)"};
    font-weight: ${props => props.error ? "var(--scrannysFontBold)" : "var(--scrannysFontLight)"};
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
    font-weight: var(--scrannysFontLight);
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    text-transform: uppercase;
    display: inline-block;
    border: 1px solid var(--scrannysOrange50over50);
`
const PostalBox = styled.input`
    width: 180px;
    height: 46px;
    background: var(--scrannysOrange50);
    border-radius: 5px;
    font-weight: var(--scrannysFontLight);
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 16px;
    border: 1px solid var(--scrannysBlue);
    outline: none;
    ::placeholder { 
        color: var(--scrannysBlue);
        opacity: 1;
    }
`
const VerifyButton = styled(Link)`
    width: 270px;
    height: 46px;
    background: var(--scrannysBlue);
    border-radius: 5px;
    font-weight: var(--scrannysFontLight);
    font-size: 12px;
    color: var(--scrannysLightWhite);
    letter-spacing: 1.72px;
    text-align: center;
    line-height: 46px;
    text-transform: uppercase;
    display: inline-block;
    margin-left: 16px;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid var(--scrannysOrange50over50);
`
const EnterGuestContainer = styled.div`
    margin-top: 15px;
    text-align: center;
`
const GuestButton = styled(Link)`
    margin-top: 30px;
    font-weight: var(--scrannysFontBold);
    line-height: 15px;
    font-size: 12px;
    color: var(--scrannysBlue);
    letter-spacing: 1.72px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
`
const DeliveryTimesText = styled(VerifyText)`
    margin-top: 60px;
    text-transform: none;
    span{
        font-weight: var(--scrannysFontBold);; 
    }
`
const InstagramButtonContainer = styled.div`
    position: relative;
    background: red;
    margin-top: 50px;
`
const InstagramButton = styled.div`
    position: absolute;
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
function Verify(props) {


    const dataContext = useContext(DataContext)

    //State
    const [postCodeInput, setPostCodeInput] = useState("")
    const [guestErrorMessage, setGuestErrorMessage] = useState("OR")
    const [guestErrorStyle, setGuestErrorStyle] = useState(false)
    const postCodeInputRef = useRef()
 
    dataContext.setIsGuest(true)

    //State checks
    useEffect(() => {
        //Constantly checks post code match to change the to="" property in react router button
        dataContext.checkPostCodeMatch(postCodeInput)
    })
    
    //Event Handlers
    const checkErrorMessage = () => {
        //On button click checks if it should display error message if postcode dosnt match
        if(dataContext.isGuest === true) {
            setGuestErrorMessage("WE ARE SORRY BUT YOUR POST CODE IS NOT WITHIN OUR DELIVERY AREA, YOU CAN TRY AGAIN OR")
            setGuestErrorStyle(true)
            postCodeInputRef.current.select();
        }
    }
    const handleEnterEvent = keyPressed => {
        if(keyPressed === 'Enter'){
            if(dataContext.isGuest === true ) {
                checkErrorMessage()
            } else {
                props.history.push('/all');
            }
        }
    }


    return (
        <>
        <VerifyModalContaier>
            <LogoProducts><img src={logoVerify} alt="logo" /></LogoProducts>
            <VerifyAreaText>PLEASE VERIFY YOU ARE WITHIN OUR DELIVERY AREA</VerifyAreaText>
            <FormValidationContainer>
                <FormBox>
                    <CityBox>Barcelona</CityBox>
                    <PostalBox 
                        type="text" 
                        name="Post Code" 
                        placeholder="ENTER POST CODE"
                        onFocus={(e) => e.target.placeholder = ""} 
                        onBlur={(e) => e.target.placeholder = "ENTER POST CODE"}
                        autoComplete="off"
                        value={postCodeInput}
                        onChange={e => setPostCodeInput(e.target.value)}
                        onKeyPress={ e => handleEnterEvent(e.key) }
                        ref={postCodeInputRef}
                        maxLength="5"
                    />
                    <VerifyButton to={ dataContext.isGuest === true ? "/" : "/all" } onClick={() => checkErrorMessage()}>VISIT SCRANNY’S HOUSE</VerifyButton>
                </FormBox>
            </FormValidationContainer>
            <VerifyOrText error={guestErrorStyle}>{guestErrorMessage}</VerifyOrText>
            <EnterGuestContainer>
                <GuestButton to="/deliveries" onClick={() => dataContext.setIsGuest(true)}>VISIT AS A GUEST</GuestButton>
            </EnterGuestContainer>
            <DeliveryTimesText>
                Deliveries will be scheduled between <span>19:00</span> and <span>21:00</span> 
                <br/>
                <br/>
                Orders processed after 19:00 will be scheduled for the next working day
            </DeliveryTimesText>
            <InstagramButtonContainer>
                <a href="https://www.instagram.com/scrannyshouse/" target="_blank">
                    <InstagramButton>
                        <img src={instagramLogo} alt="instagram logo" />
                    </InstagramButton>
                </a>
            </InstagramButtonContainer>
            
        </VerifyModalContaier>
        </>
    )
}

export default Verify;
