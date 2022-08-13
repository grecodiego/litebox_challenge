import { VideosList } from '../../../../components/videosList/videosList'
import { PrimaryButton } from '../../../../components/buttons/primaryButton'
import playTriangle from '../../../../assets/images/png/playTriangle.png'
import plus from '../../../../assets/images/png/plus.png'
import { SubTitle } from '../../../../components/subTitle/subTitle'
import { StyledHomeContainer, Title } from './homeContainer.styled'

export const HomeContainer = ({ filmData }) => {
	return (
		<StyledHomeContainer>
			<SubTitle partOne={`ORIGINAL DE `} partTwo={`LITEFLIX`} size={20} />
			<Title> {filmData.title}</Title>
			<PrimaryButton text={'REPRODUCIR'} image={playTriangle} />
			<PrimaryButton border={true} text={'MI LISTA'} image={plus} />
			<VideosList />
		</StyledHomeContainer>
	)
}
