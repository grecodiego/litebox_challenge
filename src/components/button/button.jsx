import { StyledButton, ImageIcon } from './button.styled'

export const Button = ({ border, image, onClick, backgroundColor }) => {
	return (
		<StyledButton
			border={border}
			image={image}
			onClick={onClick}
			backgroundColor={backgroundColor}
		>
			{image !== undefined ? <ImageIcon src={image} /> : null}
		</StyledButton>
	)
}
