import React, { useEffect, useState } from 'react'
import { theme } from './themes/colors'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globalstyles'
import { Home } from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import { AddFilm } from './pages/addFilm/addFilm'
import { getFilmData } from './repository/mainFilms/mainFilmsRepo'

function App() {
	const [filmData, setFilmData] = useState(null)
	useEffect(() => {
		getFilmData().then((res) => setFilmData(res))
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<Home filmData={filmData} />} />
					<Route path='/add-film' element={<AddFilm />} />
					<Route path='*' element={<h1>Not Found</h1>} />
				</Routes>
			</>
		</ThemeProvider>
	)
}

export default App
