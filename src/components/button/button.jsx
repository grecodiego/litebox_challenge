import { StyledButton, ButtonTitle, ImageIcon } from './button.styled'

export const Button = ({ border, text, image }) => {
	return (
		<StyledButton border={border} image={image}>
			<ImageIcon src={image} />
			<ButtonTitle>&nbsp; {text}</ButtonTitle>
		</StyledButton>
	)
}
