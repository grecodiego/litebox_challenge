import styled from 'styled-components'

export const StyledButton = styled.button`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 56px;
	margin: 0 17% 5% 17%;
	color: ${({ theme }) => theme.secondaryColor};
	background-color: ${({ theme }) => theme.backgroundColor};
	border: ${(props) =>
		props.border === true ? '1px solid rgba(255, 255, 255, 0.5);' : 'none'};
	background-color: ${({ backgroundColor }) =>
		backgroundColor === true ? ({ theme }) => theme.secondaryColor : 'none'};
`

export const ImageIcon = styled.img`
	margin-right: 12px;
`
