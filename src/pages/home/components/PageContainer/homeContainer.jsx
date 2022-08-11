import { VideosList } from '../../../../components/videosList/videosList'
import { Button } from '../../../../components/button/button'
import playTriangle from '../../../../assets/images/png/playTriangle.png'
import plus from '../../../../assets/images/png/plus.png'
import { SubTitle } from '../../../../components/subTitle/subTitle'
import { StyledHomeContainer, Title } from './homeContainer.styled'

export const HomeContainer = ({ filmData }) => {
	return (
		<StyledHomeContainer>
			<SubTitle partOne={`ORIGINAL DE `} partTwo={`LITEFLIX`} size={20} />
			<Title> {filmData.title}</Title>
			<Button text={'REPRODUCIR'} image={playTriangle}></Button>
			<Button border={true} text={'MI LISTA'} image={plus}></Button>
			<VideosList />
			<main></main>
		</StyledHomeContainer>
	)
}
