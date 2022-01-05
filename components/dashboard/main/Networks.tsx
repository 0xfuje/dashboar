import { useContext, useState, useEffect } from "react";
import { DashboardContext } from "../../../context/dashboard.context";
import styled from "styled-components";
import Card from "../Card";


const StyledNetworks = styled.div`
    .Networks {
        &-grid {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 162.5px 162.5px 162.5px 162.5px;
            grid-auto-rows: 60px;
        }
        
    }
`

function Networks() {
    const { balances, loading } = useContext(DashboardContext);
    const renderCards =  loading.balances ? '' : 
        balances.map((n: any) => 
            <Card 
                name={n.name}
                value={`$${n.usd_value.toFixed(1)}`}
                logo_url={n.logo_url}
                key={n.community_id}
                id={n.community_id}
            />
    );
    console.log(balances);

    
    return (
        <StyledNetworks className='Networks'>
            <h2 className="Networks-title">Networks</h2>
            <div className="Networks-grid">
                {renderCards}
            </div>
        </StyledNetworks>
    )
}

export default Networks
