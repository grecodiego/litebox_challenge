import React, { useState, useEffect } from 'react'
import {
	/* getAleatoryPopularFilms */ getPopularFilms,
} from '../../repository/videosListAPI/videosListRepo'
import { FilmBox } from './components/filmBox/filmBox'
import {
	StyledVideoList,
	FilmsContainer,
	LoadingText,
	CenterDiv,
	VideosContainer,
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
		getPopularFilms().then((res) => setFilmsData(res))

		// try this to get random movies (change the function on repository)
		//	getAleatoryPopularFilms().then((res) => setFilmsData(res))
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
			return (
				<VideosContainer ref={ref}>
					<StyledVideoList>
						<Filter
							dropDownOptionChoosen={dropDownOptionChoosen}
							setDropDownOptionChoosen={setDropDownOptionChoosen}
							filtersOptions={filtersOptions}
						/>

						<FilmsContainer>
							{filmsData ? (
								inView ? (
									filmsData.slice(1, 5).map((film, index) => {
										return (
											<FilmBox
												index={index}
												key={film.id}
												title={film.title}
												voteAverage={film.vote_average}
												date={film.release_date}
												src={
													'https://image.tmdb.org/t/p/w500' + film.backdrop_path
												}
											/>
										)
									})
								) : (
									<div></div>
								)
							) : (
								<CenterDiv>
									<LoadingText>LOADING</LoadingText>
								</CenterDiv>
							)}
						</FilmsContainer>
					</StyledVideoList>
				</VideosContainer>
			)

		case 2:
			return (
				<VideosContainer>
					<Filter
						dropDownOptionChoosen={dropDownOptionChoosen}
						setDropDownOptionChoosen={setDropDownOptionChoosen}
						filtersOptions={filtersOptions}
					/>

					<StyledVideoList>
						<FilmsContainer ref={ref}>
							{localData ? (
								inView ? (
									localData.slice(0, 4).map((film, index) => {
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
								)
							) : (
								<CenterDiv>
									<LoadingText>NO TIENES PELICULAS CARGADS</LoadingText>
								</CenterDiv>
							)}
						</FilmsContainer>
					</StyledVideoList>
				</VideosContainer>
			)
		default:
			break
	}
}
