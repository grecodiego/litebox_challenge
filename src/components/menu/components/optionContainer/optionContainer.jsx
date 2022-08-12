import { StyledOptionContainer, Option } from './optionContainer.styled'
import { Link } from 'react-router-dom'

export const OptionContainer = ({
	option,
	optionChoosen,
	handleClickOption,
}) => {
	return (
		<Link to={option.path}>
			<StyledOptionContainer>
				<Option
					option={option}
					optionChoosen={optionChoosen}
					onClick={() => handleClickOption(option)}
				>
					{option.title}
				</Option>
			</StyledOptionContainer>
		</Link>
	)
}
