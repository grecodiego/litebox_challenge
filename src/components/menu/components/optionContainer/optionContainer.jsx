import { StyledOptionContainer, Option } from './optionContainer.styled'
import React from 'react'

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
				optionChoosen={optionChoosen}
			>
				{option.title}
			</Option>
		</StyledOptionContainer>
	)
}
