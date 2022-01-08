import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background-color: ${({theme}) => theme.colors.dark2};
    border: 1px solid ${({theme}) => theme.colors.grey2};
    border-radius: ${({theme}) => theme.sizes.borrad.small};
    .Card {
        &-left {
            position: relative;
            display: flex;
            
        }
        &-name {
            font-weight: 300;
            font-size: ${({theme}) => theme.sizes.font.normal};
            margin-top: -5px;
            color: ${({theme}) => theme.colors.lightgrey2};
            
        }

        &-value {
            position: absolute;
            left: 0;
            top: -3px;
            font-size: ${({theme}) => theme.sizes.font.medium};
        }
        
    }
`

type propsType = {
    name: string,
    value: string,
    logo_url: string,
    site_url?: string,
    id: number | string
}


function Card(props: propsType) {
    return (
        <StyledCard className='Card' as="a" href={props.site_url} target="_blank" rel="noopener">
            <Image className="Card-logo" width='32px' height='32px' src={props.logo_url} alt='Logo' />
            <div className="Card-left">
                <p className="Card-name">{props.name}</p>
                <h3 className="Card-value">{props.value}</h3>
            </div>
        </StyledCard>
    )
}

export default Card
