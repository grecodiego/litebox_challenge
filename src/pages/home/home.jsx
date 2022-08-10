import { useEffect, useState } from 'react'
import { Page } from '../../components/page/page'
import { getFilmData } from '../../repository/mainFilms/mainFilmsRepo'
import { CenterDiv, LoadingText } from './components/home.styled'

export const Home = () => {
	const [filmData, setFilmData] = useState(null)
	useEffect(() => {
		getFilmData().then((res) => setFilmData(res))
	}, [])

	if (filmData) {
		return <Page filmData={filmData} />
	} else {
		return (
			<CenterDiv>
				<LoadingText>LOADING</LoadingText>
			</CenterDiv>
		)
	}
}
