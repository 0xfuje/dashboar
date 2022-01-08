import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";
import { DashboardContext } from "../../../context/dashboard.context";

const StyledDashHeader = styled.div`
    .DashHeader {
        &-address {
            display: inline-block;
            background-color: ${({theme}) => theme.colors.dark1};
            border-radius: ${({theme}) => theme.sizes.borrad.small};
            padding: 0.5rem 2rem;
            
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
    const { wallet, addressID } = useContext(DashboardContext);
    const shortAddressID = `${addressID.slice(0, 6)}...${addressID.slice(-4)}`;
    const displayTotal = (wallet.total > 0) ? `$${wallet.total}` : '???' ;
    return (
        <StyledDashHeader className="DashHeader">
            <div className="DashHeader-address">
                {shortAddressID}
            </div>
            <div className="DashHeader-netWorth"><p><span>{displayTotal} </span> — Net Worth</p></div>
        </StyledDashHeader>
        
    )
}

export default DashHeader;
