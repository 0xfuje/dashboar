import styled from "styled-components"
import StyledDash from "../StyledDash";

const StyledWallet = styled.div`
    .Wallet {
        &-title {
            margin-bottom: 10px;
        }
        &-grid {
            display: grid;
            position: relative;
            margin-top: -30px;
            grid-auto-rows: 50px;
            grid-row-gap: 1px;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            justify-items: end;
            align-items: center;
            background:
                repeating-linear-gradient(to bottom,
                transparent 0,
                transparent 50px,
                ${({theme}) => theme.colors.grey2} 50px,
                ${({theme}) => theme.colors.grey2} 51px
                );
            div:nth-child(-n + 4) {
                align-self: flex-end;
                text-transform: uppercase;
                color: ${({theme}) => theme.colors.grey1};
                font-size: ${({theme}) => theme.sizes.font.small}
            }
            div:nth-child(4n + 1) {
                justify-self: start;
            }

            div:nth-child(4n + 6), div:nth-child(4n + 7) {
                color: ${({theme}) => theme.colors.lightgrey1};
                font-weight: 300;
            }
            
        }
        
    }
`

function Wallet() {
    return (
        <StyledWallet className="Wallet">
            <h2 className='Wallet-title'>Wallet</h2>
            <StyledDash> 
                <div className="Wallet-grid">
                    <div className="Wallet-grid-asset">asset</div>
                    <div className="Wallet-grid-price">price</div>
                    <div className="Wallet-grid-balance">balance</div>
                    <div className="Wallet-grid-value">value</div>
                    <div className="Wallet-grid-asset">Ethereum</div>
                    <div className="Wallet-grid-price">$3852</div>
                    <div className="Wallet-grid-balance">0.05 ETH</div>
                    <div className="Wallet-grid-value">$1450</div>
                    <div className="Wallet-grid-asset">BTC</div>
                    <div className="Wallet-grid-price">$52852</div>
                    <div className="Wallet-grid-balance">0.025 BTC</div>
                    <div className="Wallet-grid-value">$1150</div>
                    <div className="Wallet-grid-asset">ADA</div>
                    <div className="Wallet-grid-price">$1.2</div>
                    <div className="Wallet-grid-balance">158 ADA</div>
                    <div className="Wallet-grid-value">$362</div>
                </div>
            </StyledDash>
        </StyledWallet>
    )
}

export default Wallet
