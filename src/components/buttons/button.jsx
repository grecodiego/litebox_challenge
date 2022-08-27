import { StyledButton, ImageIcon, Text } from './button.styled'
import { theme } from '../../themes/colors'
import React from 'react'

export const Button = ({
	background,
	border = false,
	disabled = false,
	image,
	onClick = () => {},
	text,
	textColor,
	effect = true,
}) => {
	return (
		<StyledButton
			background={background || theme.backgroundColor}
			border={border}
			disabled={disabled}
			image={image}
			onClick={onClick}
			textColor={textColor || theme.secondaryColor}
			effect={effect}
		>
			{image ? <ImageIcon src={image} /> : null}
			<Text effect={effect}>{text}</Text>
		</StyledButton>
	)
}
