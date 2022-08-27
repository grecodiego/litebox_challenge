import { AddFilm } from './pages/addFilm/addFilm'
import { GlobalStyles } from './globalstyles'
import { Home } from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { theme } from './themes/colors'
import { ThemeProvider } from 'styled-components'
import React from 'react'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/add-film' element={<AddFilm />} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
			</>
		</ThemeProvider>
	)
}

export default App
