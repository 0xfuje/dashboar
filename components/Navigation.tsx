import styled from "styled-components"

const StyledNavigation = styled.div`
    width: ${props => props.theme.sizes.width.dash2};
    height: 40px;
    background-color: ${props => props.theme.colors.dark1};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.theme.sizes.borrad.small};
`

type props = {
    address: string
}

function Navigation(props: props) {
    return (
        <StyledNavigation>
            {props.address}
        </StyledNavigation>
    )
}

export default Navigation
