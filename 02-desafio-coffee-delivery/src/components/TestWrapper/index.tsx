import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../../styles/global'
import { theme } from '../../styles/theme'

interface testWrapperProps {
  children: React.ReactNode
}

export function TestWrapper({ children }: testWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  )
}
