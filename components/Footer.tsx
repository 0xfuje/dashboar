import styled from "styled-components";
/* import { useContext } from "react";
import { DashboardContext } from "../context/dashboard.context"; */

const StyledFooter = styled.footer`
    margin-top: 3rem;
    padding-bottom: 3rem;
    
    font-weight: 300;
    font-size: ${props => props.theme.sizes.font.normal};
    color: ${props => props.theme.colors.lightgrey2};
    text-align: center;
    @media (max-width: ${props => props.theme.breakpoints.medium}) {
        padding-left: ${({theme}) => theme.sizes.padding.normal};
    }
    .Footer {
        &-para {
            max-width: 60ch;
            text-align: left;
        }
        &-link {
            color: ${props => props.theme.colors.light3};
            text-decoration: underline;
            &:hover, &:active {
                color: ${props => props.theme.colors.light1};
            }
            
        }
    }
`;



function Footer() {
    const year = new Date().getFullYear();
    return (
        <StyledFooter className="Footer">
            <p className="Footer-para">©{year} Designed and coded by <a className='Footer-link' href="https://github.com/0xfuje">0xfuje</a>.
            Works best on desktop viewport.
            </p>
        </StyledFooter>
    )
}

export default Footer
