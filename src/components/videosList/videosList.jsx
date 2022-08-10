import React, { useState, useEffect } from 'react'
import { getAleatoryPopularFilms } from '../../repository/videosListAPI/videosListRepo'
import { SubTitle } from '../subTitle/subTitle'
import { FilmBox } from './filmbox/filmbox'
import { StyledVideoList, FilmsContainer, Filter } from './videosList.styled'

export const VideosList = () => {
	const [filmsData, setFilmsData] = useState(null)
	useEffect(() => {
		getAleatoryPopularFilms().then((res) => setFilmsData(res))
	}, [])

	if (filmsData !== null) {
		return (
			<StyledVideoList>
				<Filter>
					<SubTitle partOne={`VER:`} partTwo={`POLUPARES`} size={18} />
				</Filter>
				<FilmsContainer>
					{filmsData.slice(-3).map((film) => {
						return (
							<FilmBox
								key={film.id}
								title={film.title}
								src={'https://image.tmdb.org/t/p/w500' + film.backdrop_path}
							/>
						)
					})}
				</FilmsContainer>
			</StyledVideoList>
		)
	} else {
		return <p>Loading...</p>
	}
}
