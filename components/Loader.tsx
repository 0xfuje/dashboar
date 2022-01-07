import styled from "styled-components";
import DashHeader from "./dashboard/main/DashHeader";

const StyledLoader = styled.div`
    margin: 0 auto;
    background-color: ${({theme}) => theme.colors.dark2};
    max-width: ${({theme}) => theme.sizes.width.dash1};
    border: 0.5px solid ${({theme}) => theme.colors.grey2};
    border-radius: ${({theme}) => theme.sizes.borrad.medium};
    padding: ${({theme}) => theme.sizes.padding.dash};

    .Loader {
        &-animation {
        margin: 60px auto;
        font-size: 10px;
        position: relative;
        text-indent: -9999em;
        border-top: 1.1em solid rgba(233,236,239, 0.2);
        border-right: 1.1em solid rgba(233,236,239, 0.2);
        border-bottom: 1.1em solid rgba(233,236,239, 0.2);
        border-left: 1.1em solid #e9ecef;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;

        &,
        &:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
        }
    
        @-webkit-keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes load8 {
            0% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }
    }
   
    
`;

type loaderProps = {
    loading: boolean
}

function Loader(props: loaderProps) {
    return (
        <StyledLoader className="Loader">
            <DashHeader />
            {props.loading ? <div className="Loader-animation" /> : ''}
        </StyledLoader>
    )
}

export default Loader;
