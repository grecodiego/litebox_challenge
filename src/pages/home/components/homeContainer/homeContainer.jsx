import {
	ButtonsContainer,
	StyledHomeContainer,
	SubContainer,
	Title,
} from './homeContainer.styled'
import { Button } from '../../../../components/buttons/button'
import { SubTitle } from '../../../../components/subTitle/subTitle'
import { theme } from '../../../../themes/colors'
import { VideosList } from '../../../../components/videosList/videosList'
import playTriangle from '../../../../assets/images/png/playTriangle.png'
import plus from '../../../../assets/images/png/plus.png'

export const HomeContainer = ({ filmData }) => {
	return (
		<StyledHomeContainer>
			<SubContainer>
				<SubTitle partOne={`ORIGINAL DE `} partTwo={`LITEFLIX`} size={20} />
				<Title> {filmData.title}</Title>
				<ButtonsContainer>
					<Button text={'REPRODUCIR'} image={playTriangle} />
					<Button
						background={theme.secondaryBackgroundColor}
						border={true}
						image={plus}
						text={'MI LISTA'}
					/>
				</ButtonsContainer>
			</SubContainer>
			<VideosList />
		</StyledHomeContainer>
	)
}
