import React from 'react'
import { Text, TitleContainer } from './brandTitle.styled'

export const BrandTitle = ({ mobile }) => {
	return (
		<TitleContainer mobile={mobile}>
			<Text weigth={`Regular`}>LITE</Text>
			<Text weigth={`Light`}>FLIX</Text>
		</TitleContainer>
	)
}
