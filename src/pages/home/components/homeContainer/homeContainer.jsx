import {
	ButtonsContainer,
	StyledHomeContainer,
	SubContainer,
	Title,
} from './homeContainer.styled'
import { Button } from '../../../../components/buttons/button'
import { SubTitle } from '../../../../components/subTitle/subTitle'
import { theme } from '../../../../themes/colors'
import { useInView } from 'react-intersection-observer'
import { VideosList } from '../../../../components/videosList/videosList'
import playTriangle from '../../../../assets/images/png/playTriangle.png'
import plus from '../../../../assets/images/png/plus.png'
import React from 'react'

export const HomeContainer = ({ filmData }) => {
	const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })

	return (
		<StyledHomeContainer>
			<SubContainer>
				<SubTitle partOne={`ORIGINAL DE `} partTwo={`LITEFLIX`} size={20} />
				<Title> {filmData.title}</Title>
				<ButtonsContainer ref={ref}>
					{inView ? (
						<>
							<Button text={'REPRODUCIR'} image={playTriangle} />
							<Button
								background={theme.secondaryBackgroundColor}
								border={true}
								image={plus}
								text={'MI LISTA'}
							/>
						</>
					) : (
						<div></div>
					)}
				</ButtonsContainer>
			</SubContainer>
			<VideosList />
		</StyledHomeContainer>
	)
}
