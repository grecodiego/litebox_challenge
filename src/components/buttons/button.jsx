import { StyledButton, ImageIcon, Text } from './button.styled'
import { theme } from '../../themes/colors'

export const Button = ({
	background,
	border = false,
	disabled = true,
	image,
	onClick = () => {},
	text,
	textColor,
}) => {
	return (
		<StyledButton
			background={background || theme.backgroundColor}
			border={border}
			disabled={disabled}
			image={image}
			onClick={onClick}
			textColor={textColor || theme.secondaryColor}
		>
			{image ? <ImageIcon src={image} /> : null}
			<Text>{text}</Text>
		</StyledButton>
	)
}
