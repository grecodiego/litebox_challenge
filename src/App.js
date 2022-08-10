import React from 'react'
import { theme } from './themes/colors'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalstyles'
import { Home } from './pages/home/home'
function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Home />
			</>
		</ThemeProvider>
	)
}

export default App
