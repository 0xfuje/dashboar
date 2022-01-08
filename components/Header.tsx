import styled from 'styled-components';
import SearchBar from './SearchBar';
import Image from 'next/image';


const StyledHeader = styled.header`
    margin: 40px auto;
    display: flex;
    max-width: ${props => props.theme.sizes.width.dash1};
    justify-content: space-between;
    background-color: ${props => props.theme.colors.dark2};
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
    }
`



function Header() {
    

    return (
        <StyledHeader className='Header'>
                <div className="Header-logo">
                    <Image className='Header-logo-text' src='/dash.svg' width='100px' height='40px' alt='DashBoar Logo'/>
                    <div className="Header-logo-boar"> 🐗</div>
                </div>
                
                
                <SearchBar />
        </StyledHeader>
    )
}

export default Header
