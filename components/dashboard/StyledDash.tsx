import styled from "styled-components"

const StyledDash = styled.div`
    margin: 0 auto;
    max-width: 100%;
    border: 0.5px solid ${({theme}) => theme.colors.grey2};
    border-radius: ${({theme}) => theme.sizes.borrad.medium};
    padding: ${({theme}) => theme.sizes.padding.sm_dash};
`

export default StyledDash;
