import { CenterDiv, LoadingText } from './home.styled'
import { HomeContainer } from './components/homeContainer/homeContainer'
import { BackgroundContainer } from '../../components/backgroundContainer/backgroundContainer'
import { Page } from '../../components/page/page'
import React, { useEffect, useState } from 'react'
import { getFilmData } from '../../repository/mainFilms/mainFilmsRepo'

export const Home = () => {
	const [filmData, setFilmData] = useState(null)
	useEffect(() => {
		getFilmData().then((res) => setFilmData(res))
	}, [])
	const viewportWidth = window.innerWidth

	if (filmData) {
		return (
			<Page>
				<BackgroundContainer filmImage={filmData.backdrop_path} />
				<HomeContainer filmData={filmData}></HomeContainer>
			</Page>
		)
	} else {
		return (
			<CenterDiv>
				<LoadingText>LOADING</LoadingText>
			</CenterDiv>
		)
	}
}
