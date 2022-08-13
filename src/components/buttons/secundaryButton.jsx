import { SecundaryStyledButton, SecundaryText } from './button.styled'

export const SecundaryButton = ({
	onClick,
	text,
	imageOnDrop,
	filmNameInputValue,
}) => {
	return (
		<SecundaryStyledButton
			onClick={onClick}
			imageOnDrop={imageOnDrop}
			filmNameInputValue={filmNameInputValue}
		>
			<SecundaryText>{text}</SecundaryText>
		</SecundaryStyledButton>
	)
}
