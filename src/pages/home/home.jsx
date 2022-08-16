import { BackgroundContainer } from '../../components/backgroundContainer/backgroundContainer'
import { CenterDiv, LoadingText } from './home.styled'
import { getFilmData } from '../../repository/mainFilms/mainFilmsRepo'
import { HomeContainer } from './components/homeContainer/homeContainer'
import { Page } from '../../components/page/page'
import React, { useEffect, useState } from 'react'

export const Home = () => {
	const [filmData, setFilmData] = useState(null)

	useEffect(() => {
		getFilmData().then((res) => setFilmData(res))
	}, [])

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
