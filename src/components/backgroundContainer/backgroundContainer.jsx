import { Fragment } from 'react'
import React from 'react'
import {
	BackgroundAnimation,
	GradientBackground,
	ImageContainer,
	StyledBackgroundContainer,
} from './backgroundContainer.styled'

export const BackgroundContainer = ({ filmImage }) => {
	const backgroundImage = `https://image.tmdb.org/t/p/w1280/${filmImage}`

	return (
		<Fragment>
			<StyledBackgroundContainer>
				<ImageContainer backgroundImage={backgroundImage}>
					<GradientBackground />
				</ImageContainer>
			</StyledBackgroundContainer>
			<BackgroundAnimation />
		</Fragment>
	)
}
