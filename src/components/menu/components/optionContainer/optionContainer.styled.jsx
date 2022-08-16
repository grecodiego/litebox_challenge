import styled from 'styled-components'

export const StyledOptionContainer = styled.button`
	align-items: center;
	background: ${({ theme }) => theme.backgroundColor};
	border: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 'height: 100px' : 'height: 60px'};
`

export const Option = styled.h3`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 'Regular' : 'Light'};
	font-size: 16px;
	font-style: normal;
	font-weight: ${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? 700 : 400};
	letter-spacing: 4px;
	line-height: 16px;
`
