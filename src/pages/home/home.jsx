import { Page } from '../../components/page/page'
import { CenterDiv, LoadingText } from './home.styled'
import { HomeContainer } from './components/PageContainer/homeContainer'
import { BackgroundContainer } from '../../components/backgroundContainer/backgroundContainer'

export const Home = ({ filmData }) => {
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
