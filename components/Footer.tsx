import styled from "styled-components";
import { useContext } from "react";
import { DashboardContext } from "../context/dashboard.context";

const StyledFooter = styled.footer<IProps>`
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-weight: 300;
    font-size: ${props => props.theme.sizes.font.normal};
    color: ${props => props.theme.colors.lightgrey2};
    text-align: center;
    .Footer {
        &-para {
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

interface IProps {
    isLoading: boolean,
}

function Footer() {
    const { wallet } = useContext(DashboardContext);
    console.log(wallet.isLoading);
    const year = new Date().getFullYear();
    return (
        <StyledFooter className="Footer" isLoading={wallet.isLoading}>
            <p className="Footer-para">©{year} Designed and coded by <a className='Footer-link' href="https://github.com/web3wolf">web3wolf</a> with <br />DeBank OpenAPI, React, Next.js and Styled components
            <br />I&#39;m looking for a work and freelancing in crypto!</p>
        </StyledFooter>
    )
}

export default Footer
