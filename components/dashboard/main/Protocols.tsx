import React, {useContext} from "react";
import styled from "styled-components";
import { DashboardContext } from "../../../context/dashboard.context";
import Card from "../Card";
import { nanoid } from 'nanoid';

const StyledProtocols = styled.div`
    .Protocols {
        &-title {
            margin-bottom: 10px;
        }
        &-grid {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 162.5px 162.5px 162.5px 162.5px;
            @media (max-width: ${props => props.theme.breakpoints.medium}) {
                grid-template-columns: 162.5px 162.5px;
            }
            grid-auto-rows: 60px;
        }
    }
    
`

function Protocols() {
    const { wallet, loading } = useContext(DashboardContext);
    const renderProtocols = loading ? '' : 
    wallet.protocols.map((p: any) => {
        if (p.asset_usd_value < 1) return;
        const id = nanoid();
        return (
            <Card 
                name={p.name}
                value={`$${p.asset_usd_value.toFixed(1)}`}
                logo_url={p.logo_url}
                site_url={p.site_url}
                key={id}
                id={id}
            />
        )
    });
    
        
        
    
    return (
        <StyledProtocols className="Protocols">
            <h2 className='Protocols-title'>{wallet.protocols.length > 0 ? 'Protocols' : ''}</h2>
            <div className="Protocols-grid">
                {renderProtocols}
            </div>
        </StyledProtocols>
    )
}

export default Protocols
