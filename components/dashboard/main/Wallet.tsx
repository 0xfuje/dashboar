import styled from "styled-components"
import StyledDash from "../StyledDash";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { DashboardContext } from "../../../context/dashboard.context";
import Image from "next/image";

const StyledWallet = styled.div`
    .Wallet {
        &-title {
            margin-bottom: 10px;
        }
        &-grid {
            display: grid;
            position: relative;
            margin-top: -40px;
            grid-auto-rows: 50px;
            grid-row-gap: 1px;
            grid-template-columns: 32px 2fr 1fr 1fr 1fr;
            justify-items: end;
            align-items: center;
            background:
                repeating-linear-gradient(to bottom,
                transparent 0,
                transparent 50px,
                ${({theme}) => theme.colors.grey2} 50px,
                ${({theme}) => theme.colors.grey2} 51px
                );
            div:nth-child(-n + 5) {
                align-self: flex-end;
                text-transform: uppercase;
                color: ${({theme}) => theme.colors.grey1};
                font-size: ${({theme}) => theme.sizes.font.small}
            }
            div:nth-child(5n + 2) {
                justify-self: start;
                margin-left: 10px;
            }
            div:nth-child(5n + 8) {
                font-size: ${({theme}) => theme.sizes.font.large};
            }

            div:nth-child(5n + 6), div:nth-child(5n + 7) {
                color: ${({theme}) => theme.colors.light3};
                font-weight: 300;
            }
            &-item {
                &-asset {
                    position: relative;
                    display: flex;
                    
                    &-name {
                        color: ${({theme}) => theme.colors.light1};
                        font-weight: 500;
                        position: absolute;
                        width: 300px;
                        top: -30px;               
                    }
                    &-chain {
                        font-size: ${({theme}) => theme.sizes.font.small};
                        color: ${({theme}) => theme.colors.lightgrey2};
                        font-weight: 300;
                        position: absolute;
                        width: 300px;
                        top: -9px;
                    }
                }
                &-price, &-balance {
                    font-weight: 300;
                    
                    color: ${({theme}) => theme.colors.light3};
                }
            }
            
        }
        
        
    }
`

function Wallet() {
    const { wallet, loading } = useContext(DashboardContext);
    console.log(wallet);
    
    
    
    const renderWallet = loading ? '' : 
    wallet.map((item: any) => {
        if (item.value < 1) return;
        return (
            <>
                {(!item.logo_url) 
                    ? <Image className="Wallet-grid-item-image" src='/icons/coin-default.svg' height='32px' width='32px' alt={`${item.name} logo`}/> 
                    : <Image className="Wallet-grid-item-image" src={item.logo_url} height='32px' width='32px' alt={`${item.name} logo`}/>
                }
                <div className="Wallet-grid-item-asset"  key={nanoid()}>
                    <p className='Wallet-grid-item-asset-name'>{item.name}</p>
                    <p className='Wallet-grid-item-asset-chain'> on {item.chain.toUpperCase()}</p>
                </div>
                <p className="Wallet-grid-item-price">${item.price}</p>
                <p className="Wallet-grid-item-balance">{item.balance}</p>
                <p className="Wallet-grid-item-value">${item.value}</p>
            </>
        )
    });
    return (
        <StyledWallet className="Wallet">
            <h2 className='Wallet-title'>Wallet</h2>
            <StyledDash> 
                <div className="Wallet-grid">
                    <div className="Wallet-grid-empty"></div>
                    <div className="Wallet-grid-asset">asset</div>
                    <div className="Wallet-grid-price">price</div>
                    <div className="Wallet-grid-balance">balance</div>
                    <div className="Wallet-grid-value">value</div>
                    {renderWallet}
                </div>
            </StyledDash>
        </StyledWallet>
    )
}

export default Wallet
