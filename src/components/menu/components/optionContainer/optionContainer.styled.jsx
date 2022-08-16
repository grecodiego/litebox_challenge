import styled from 'styled-components'

export const StyledOptionContainer = styled.button`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background: ${({ theme }) => theme.backgroundColor};
	border: none;
	justify-content: space-between;
	${({ option, optionChoosen }) =>
		option.path === optionChoosen ? 'height: 100px' : 'height: 60px'};
`

export const Option = styled.h3`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ option, optionChoosen }) =>
		option.path === optionChoosen ? 'Regular' : 'Light'};
	font-size: 16px;
	font-style: normal;
	font-weight: ${({ option, optionChoosen }) =>
		option.path === optionChoosen ? 700 : 400};
	letter-spacing: 4px;
	line-height: 16px;
	:hover {
		color: ${({ theme }) => theme.primaryColor};
		font-weight: 700;
	}
`
