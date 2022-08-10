import {
	StyledBackgroundContainer,
	GradientBackground,
	BackgroundAnimation,
} from './components/backgroundContainer.styled'
export const BackgroundContainer = ({ filmImage }) => {
	let backgroundImage = 'https://image.tmdb.org/t/p/w1280' + filmImage

	return (
		<>
			<StyledBackgroundContainer backgroundImage={backgroundImage}>
				<GradientBackground />
			</StyledBackgroundContainer>
			<BackgroundAnimation />
		</>
	)
}
