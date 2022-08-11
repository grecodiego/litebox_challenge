import {
	StyledBackgroundContainer,
	GradientBackground,
	BackgroundAnimation,
	ImageContainer,
} from './components/backgroundContainer.styled'
export const BackgroundContainer = ({ filmImage }) => {
	let backgroundImage = 'https://image.tmdb.org/t/p/w1280' + filmImage

	return (
		<>
			<StyledBackgroundContainer>
				<ImageContainer backgroundImage={backgroundImage}>
					<GradientBackground />
				</ImageContainer>
			</StyledBackgroundContainer>
			<BackgroundAnimation />
		</>
	)
}
