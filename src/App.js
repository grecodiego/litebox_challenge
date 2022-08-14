import { GlobalStyles } from './globalstyles'

import { theme } from './themes/colors'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { AddFilm } from './pages/addFilm/addFilm'

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
