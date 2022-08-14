import styled from 'styled-components'

export const StyledOptionContainer = styled.button`
	display: flex;
	align-items: center;
	flex-direction: row;
	border: none;
	width: 100%;
	justify-content: space-between;
	${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 'height: 100px' : 'height: 60px'};
	background: ${({ theme }) => theme.backgroundColor};
`
export const Option = styled.h3`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 'Regular' : 'Light'};
	font-style: normal;
	font-weight: ${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 700 : 400};
	font-size: 16px;
	line-height: 16px;
	letter-spacing: 4px;
`
