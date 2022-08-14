import { SecondaryStyledButton, SecondaryText } from './button.styled'

export const SecondaryButton = ({ onClick, text, enable }) => {
	return (
		<SecondaryStyledButton onClick={onClick} enable={enable}>
			<SecondaryText>{text}</SecondaryText>
		</SecondaryStyledButton>
	)
}
