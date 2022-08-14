import React, { useState, useEffect } from 'react'
import { getAleatoryPopularFilms } from '../../repository/videosListAPI/videosListRepo'
import { FilmBox } from './components/filmBox/filmBox'
import {
	StyledVideoList,
	FilmsContainer,
	LoadingText,
	CenterDiv,
} from './videosList.styled'
import { Filter } from './components/filter/filter'
import { useInView } from 'react-intersection-observer'

export const VideosList = () => {
	const [filmsData, setFilmsData] = useState(null)
	const [localData, setLocalData] = useState(null)
	const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })
	const [dropDownOptionChoosen, setDropDownOptionChoosen] = useState({
		id: 1,
		title: 'POPULARES',
	})
	useEffect(() => {
		getAleatoryPopularFilms().then((res) => setFilmsData(res))
	}, [])
	useEffect(() => {
		setLocalData(JSON.parse(localStorage.getItem('userMovies')))
	}, [])

	let filtersOptions = [
		{ id: 1, title: 'POPULARES' },
		{ id: 2, title: 'MIS PELICULAS' },
	]

	switch (dropDownOptionChoosen.id) {
		case 1:
			if (filmsData !== null) {
				return (
					<StyledVideoList>
						<Filter
							dropDownOptionChoosen={dropDownOptionChoosen}
							setDropDownOptionChoosen={setDropDownOptionChoosen}
							filtersOptions={filtersOptions}
						/>
						<FilmsContainer ref={ref}>
							{inView === true ? (
								filmsData.slice(-4).map((film, index) => {
									return (
										<FilmBox
											index={index}
											key={film.id}
											title={film.title}
											src={
												'https://image.tmdb.org/t/p/w500' + film.backdrop_path
											}
										/>
									)
								})
							) : (
								<div></div>
							)}
						</FilmsContainer>
					</StyledVideoList>
				)
			} else {
				return <LoadingText>LOADING</LoadingText>
			}
		case 2:
			if (localData !== null) {
				return (
					<StyledVideoList>
						<Filter
							dropDownOptionChoosen={dropDownOptionChoosen}
							setDropDownOptionChoosen={setDropDownOptionChoosen}
							filtersOptions={filtersOptions}
						/>

						<FilmsContainer ref={ref}>
							{inView === true ? (
								localData.map((film, index) => {
									return (
										<FilmBox
											key={index}
											title={film.title}
											src={film.imageUrl}
										/>
									)
								})
							) : (
								<div></div>
							)}
						</FilmsContainer>
					</StyledVideoList>
				)
			} else {
				return (
					<CenterDiv>
						<LoadingText>LOADING</LoadingText>
					</CenterDiv>
				)
			}

		default:
			return (
				<CenterDiv>
					<LoadingText>LOADING</LoadingText>
				</CenterDiv>
			)
	}
}
