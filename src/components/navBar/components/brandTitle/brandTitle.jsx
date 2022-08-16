import React from 'react'
import { TitleContainer, Text } from './brandTitle.styled'

export const BrandTitle = ({ mobile }) => {
	return (
		<TitleContainer mobile={mobile}>
			<Text weigth={`Regular`}>LITE</Text>
			<Text weigth={`Light`}>FLIX</Text>
		</TitleContainer>
	)
}
