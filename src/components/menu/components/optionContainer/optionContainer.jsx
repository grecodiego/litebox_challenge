import { StyledOptionContainer, Option } from './optionContainer.styled'

export const OptionContainer = ({
	handleClickOption,
	option,
	optionChoosen,
}) => {
	return (
		<StyledOptionContainer optionChoosen={optionChoosen} option={option}>
			<Option
				onClick={() => handleClickOption(option)}
				option={option}
				optionChoosen={optionChoosen}>
				{option.title}
			</Option>
		</StyledOptionContainer>
	)
}
