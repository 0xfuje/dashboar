import styled from "styled-components";

import DashHeader from "./dashboard/main/DashHeader";
import Wallet from "./dashboard/main/Wallet";
import Networks from "./dashboard/main/Networks";
import Protocols from "./dashboard/main/Protocols";
import History from "./dashboard/History";
import GasStation from "./dashboard/GasStation";

const StyledDashboard = styled.div`
    margin: 0 auto;
    max-width: ${({theme}) => theme.sizes.width.dash1};
    border: 0.5px solid ${({theme}) => theme.colors.grey2};
    border-radius: ${({theme}) => theme.sizes.borrad.medium};
    padding: ${({theme}) => theme.sizes.padding.dash};
`

type propsType = {
    variant: 'main' | 'history' | 'gas-station',
}

function Dashboard(props: propsType) {
    const renderDashboard = () => {
        if (props.variant === 'main') {
            return (
                <>
                    <DashHeader />
                    <Wallet />
                    <Networks />
                    <Protocols />
                </>
            )
        }
        if (props.variant === 'history') {
            return (
                <>
                    <History />
                </>
            )
        }
        if (props.variant === 'gas-station') {
            return (
                <>
                    <GasStation />
                </>
            )
        }
    }
    return (
        <StyledDashboard className='Dashboard' >
            {renderDashboard()}
        </StyledDashboard>
    )
}

export default Dashboard;
