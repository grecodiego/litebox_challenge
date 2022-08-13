import { PrimaryStyledButton, ImageIcon, PrimaryText } from './button.styled'

export const PrimaryButton = ({ border, image, onClick, text }) => {
	return (
		<PrimaryStyledButton border={border} image={image} onClick={onClick}>
			{image !== undefined ? <ImageIcon src={image} /> : null}
			<PrimaryText>{text}</PrimaryText>
		</PrimaryStyledButton>
	)
}
