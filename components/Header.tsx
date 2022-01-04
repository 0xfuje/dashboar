import styled from 'styled-components';
import SearchBar from './SearchBar';
import Image from 'next/image';
import Navigation from './Navigation';

const StyledHeader = styled.header`
    margin: 40px auto;
    display: flex;
    max-width: ${props => props.theme.sizes.width.dash1};
    justify-content: space-between;
    background-color: ${props => props.theme.colors.dark2};
`



function Header() {
    return (
        <StyledHeader className='Header'>
                <Image className='Header-logo' src='/logo/dashboar-logo-white.svg' width='100px' height='32px' alt='DashBoar Logo'/>
                <SearchBar />
        </StyledHeader>
    )
}

export default Header
