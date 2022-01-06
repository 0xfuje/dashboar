import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { DashboardContext } from "../../../context/dashboard.context";

const StyledDashHeader = styled.div`
    .DashHeader {
        &-address {
            
            align-items: center;
            background-color: ${({theme}) => theme.colors.dark1};
            border-radius: ${({theme}) => theme.sizes.borrad.small};
            padding: 1px 2rem;
            
        }
        &-netWorth {
            p {
                color: ${({theme}) => theme.colors.grey1};
                font-weight: 300;
            }
            span {
                color: ${({theme}) => theme.colors.light1};
                font-size: ${({theme}) => theme.sizes.font.xlarge};
                font-weight: 500;
            }
        }
        
    }
`

function DashHeader() {
    const { totalUSD, addressID } = useContext(DashboardContext);

    return (
        <StyledDashHeader className="DashHeader">
            <div className="DashHeader-address">
                {/* <Image className="DashHeader-address-image" src='/profile.png' alt='Profile pic' width='24px' height='24px'/> */}
                <p className="DashHeader-address-text">{addressID}</p>
            </div>
            <div className="DashHeader-netWorth"><p><span>${totalUSD} </span> — Net Worth</p></div>
        </StyledDashHeader>
        
    )
}

export default DashHeader;
