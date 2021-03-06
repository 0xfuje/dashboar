import styled from "styled-components";
import Image from "next/image";
import { useContext, useState } from 'react';
import { DashboardContext } from '../context/dashboard.context';
import { Resolution } from "@unstoppabledomains/resolution";

const StyledSearchBar = styled.div`
    background-color: ${props => props.theme.colors.dark2};
    color: ${props => props.theme.colors.dark1};
    display: flex;
    justify-content: space-between;
    
    .SearchBar {
        &-input {
            font-family: ${props => props.theme.fontFamily};
            width: ${props => props.theme.sizes.width.small_width};
            font-weight: 300;
            background-color: ${props => props.theme.colors.dark1};
            color: ${props => props.theme.colors.light1};
            padding: 0.5rem 1rem;
            height: 40px;
            border-radius: 3px 0 0 3px;
            border: none;
            outline-style: hidden;
            &::focus {
                outline: 1px solid ${props => props.theme.colors.lightgrey2};
                
            }
            &::placeholder {
                color: ${props => props.theme.colors.lightgrey1};
            }
            @media (max-width: ${props => props.theme.breakpoints.medium}) {
                
                width: calc(20rem);
            }

        }
        &-button {
            background-color: ${props => props.theme.colors.grey2};
            color: ${props => props.theme.colors.light1};
            text-transform: uppercase;
            width: 70px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 3px 3px 0;
            border: none;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.colors.grey1};
            }
        }
    }
`;



function SearchBar() {
    const { setAddressID, setDomainName, walletDispatch } = useContext(DashboardContext);
    const [address, setAddress] = useState('');

    const resolution = new Resolution();

    const resolveUD = (domain: string, currency: string = 'ETH') => {
        resolution
            .addr(domain, currency)
            .then((udAddress: string) => {
                setDomainName(domain)
                setAddressID(udAddress)
            })
            .catch((error) => console.error(error))
    }

    const setAddressHandler = () => {
        if (address.length === 42) setAddressID(address);
        if (
            address.includes('.crypto') || address.includes('.nft') || address.includes('.x') || address.includes('.wallet') || address.includes('.zil') ||
            address.includes('.bitcoin') || address.includes('.dao') || address.includes('.888') || address.includes('.coin')
        ) {
            resolveUD(address, 'ETH')
        }
        walletDispatch({ type: 'API-REQUEST'})
    } 
    return (
        <StyledSearchBar className="SearchBar">
            <input className="SearchBar-input" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter an address to get started..." />
            <button className='SearchBar-button' onClick={setAddressHandler}><Image src='/icons/arrow-right.svg' height='20px' width='20px' alt='Search for address'/></button>
        </StyledSearchBar>
    )
}

export default SearchBar;
