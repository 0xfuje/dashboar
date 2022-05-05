import styled from 'styled-components';
import SearchBar from './SearchBar';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { DashboardContext } from '../context/dashboard.context';
import UAuth from '@uauth/js'

const StyledHeader = styled.header`
    margin: 40px auto;
    display: flex;
    max-width: ${props => props.theme.sizes.width.full_width};
    justify-content: space-between;
    background-color: ${props => props.theme.colors.dark2};
    @media (max-width: ${props => props.theme.breakpoints.medium}) {
        margin: ${({theme}) => theme.sizes.padding.normal};
        margin-bottom: 0;
        .Header-logo-container {
            display: none
        }
    }
    .Header {
        &-logo {
            position: relative;
            display: flex;
            height: 40px;
            &-boar {
                font-size: 32px;
                left: 0;
                top: 0;
            }
        }
        &-connectButton {
            background-color: #4C47F7;
            color: ${props => props.theme.colors.light1};
            padding: 0 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            &:hover {
                background-color: #3e38f0;
            }
        }
    }
`



function Header() {
    const { setAddressID, setDomainName, walletDispatch } = useContext(DashboardContext);

    const uauth = new UAuth({
        clientID: '40999ed6-536a-4c85-9196-ab85695ed33c',
        redirectUri: 'http://localhost:3000',
    })

    const authUD = async () => {
        try {
            const authorization = await uauth.loginWithPopup()
            console.log(authorization)
            return authorization.idToken
        } catch (error) {
            console.error(error);
        }
    }

    const loginUD = () => {
        authUD()
            .then((idToken) => {
                setAddressID(idToken?.wallet_address)
                setDomainName(idToken?.sub)
            });
        walletDispatch({ type: 'API-REQUEST' })
    }

    return (
        <StyledHeader className='Header'>
                <div className="Header-logo">
                    <div className="Header-logo-container">
                    <Image className='Header-logo-img' src='/dash.svg' width='100px' height='40px' alt='DashBoar Logo'/>
                    </div>
                    
                    <div className="Header-logo-boar"> 🐗</div>
                </div>
                
                
                <SearchBar />
                <button className='Header-connectButton' onClick={loginUD}>
                    Login with<br/>Unstoppable
                </button>
        </StyledHeader>
    )
}

export default Header
