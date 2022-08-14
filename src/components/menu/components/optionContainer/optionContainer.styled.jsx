import styled from 'styled-components'

export const StyledOptionContainer = styled.button`
	display: flex;
	flex-direction: row;
	border: none;
	width: 100%;
	justify-content: space-between;
	height: auto;
	margin-bottom: 40px;
	background: ${({ theme }) => theme.backgroundColor};
`
export const Option = styled.h3`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-style: normal;
	font-weight: ${({ option, optionChoosen }) =>
		option.id === optionChoosen.id ? '700' : '400'};
	font-size: 16px;
	line-height: 16px;
	letter-spacing: 4px;
`
