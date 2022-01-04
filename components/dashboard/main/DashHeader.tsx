import Image from "next/image";
import styled from "styled-components";

const StyledDashHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .DashHeader {
        &-address {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            background-color: ${({theme}) => theme.colors.dark1};
            border-radius: ${({theme}) => theme.sizes.borrad.small};
            padding: 0 2rem;
            height: 40px;
            &-image {
                display: block;
                height: 24px;
                width: 24px;
                border-radius: ${({theme}) => theme.sizes.borrad.small};
            }
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
    return (
        <StyledDashHeader className="DashHeader">
            <div className="DashHeader-address">
                <Image className="DashHeader-address-image" src='/profile.png' alt='Profile pic' width='24px' height='24px'/>
                <p className="DashHeader-address-text">0x156672fD47902118ec64c00092e9b0e6eB7470a8</p>
            </div>
            <div className="DashHeader-netWorth"><p>Net Worth:<span> $1864</span></p></div>
        </StyledDashHeader>
    )
}

export default DashHeader;
