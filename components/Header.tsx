import styled from 'styled-components';
import SearchBar from './SearchBar';
import Image from 'next/image';



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
            background-color: ${props => props.theme.colors.grey2};
            color: ${props => props.theme.colors.light1};
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.colors.grey1};
            }
        }
    }
`



function Header() {
    return (
        <StyledHeader className='Header'>
                <div className="Header-logo">
                    <div className="Header-logo-container">
                    <Image className='Header-logo-img' src='/dash.svg' width='100px' height='40px' alt='DashBoar Logo'/>
                    </div>
                    
                    <div className="Header-logo-boar"> 🐗</div>
                </div>
                
                
                <SearchBar />
                <button className='Header-connectButton'>Connect a wallet</button>
        </StyledHeader>
    )
}

export default Header
