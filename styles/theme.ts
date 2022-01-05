import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            light1: string,
            light2: string,
            light3: string,
            lightgrey1: string,
            lightgrey2: string,
            grey1: string,
            grey2: string,
            dark1: string,
            dark2: string,
            dark3: string
        },
        fontFamily: string,
        sizes: {
            font: {
                xsmall: string,
                small: string,
                normal: string,
                medium: string,
                large: string,
                xlarge: string
            },
            width: {
                dash1: string,
                dash2: string,
                searchbar: string,
                full_width: string
            },
            icon: {
                small: string,
                medium: string,
                large: string
            },
            borrad: {
                small: string,
                medium: string
            },
            padding: {
                sm_dash: string,
                dash: string
            }
        },
        
    }
}

const theme: DefaultTheme = {
    colors: {
        light1: '#F8F9FA',
        light2: '#E9ECEF',
        light3: '#DEE2E6',
        lightgrey1: '#CED4DA',
        lightgrey2: '#ADB5BD',
        grey1: '#6C757D',
        grey2: '#495057',
        dark1: '#343A40',
        dark2: '#212529',
        dark3: '#0C0D0E'

    },
    fontFamily: `Poppins, sans-serif`,
    sizes: {
        font: {
            xsmall: '8px',
            small: '10px',
            normal: '12px',
            medium: '14px',
            large: '18px',
            xlarge: '24px'
        },
        width: {
            dash1: '780px',
            dash2: '500px',
            searchbar: '500px',
            full_width: '1330px',
        },
        icon: {
            small: '10px',
            medium: '20px',
            large: '32px'
        },
        borrad: {
            small: '3px',
            medium: '5px'
        },
        padding: {
            sm_dash: '20px',
            dash: '50px'
        }
    }
    
    
}

export default theme;