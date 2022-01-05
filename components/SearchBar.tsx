import styled from "styled-components";
import Image from "next/image";

const StyledSearchBar = styled.div`
    background-color: ${props => props.theme.colors.dark2};
    color: ${props => props.theme.colors.dark1};
    display: flex;
    justify-content: space-between;

    .SearchBar {
        &-input {
            font-family: ${props => props.theme.fontFamily};
            width: ${props => props.theme.sizes.width.searchbar};
            background-color: ${props => props.theme.colors.dark1};
            color: ${props => props.theme.colors.lightgrey1};
            padding: 0.5rem 1rem;
            height: 40px;
            border-radius: 3px 0 0 3px;
            border: none;
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
    return (
        <StyledSearchBar className="SearchBar">
            <input className="SearchBar-input" type="text" placeholder="Enter an address to get started..." />
            <button className='SearchBar-button'><Image src='/icons/arrow-right.svg' height='20px' width='20px' alt='Search for address'/></button>
        </StyledSearchBar>
    )
}

export default SearchBar;
