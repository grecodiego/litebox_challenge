import { StyledOptionContainer, Option } from './optionContainer.styled'

export const OptionContainer = ({
	option,
	optionChoosen,
	handleClickOption,
}) => {
	return (
		<StyledOptionContainer>
			<Option
				option={option}
				optionChoosen={optionChoosen}
				onClick={() => handleClickOption(option)}
			>
				{option.title}
			</Option>
		</StyledOptionContainer>
	)
}
