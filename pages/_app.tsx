import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyles';
import { DashboardProvider } from '../context/dashboard.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DashboardProvider>
        <Component {...pageProps} />
        </DashboardProvider>
      </ThemeProvider>

    
  )
  

}

export default MyApp
