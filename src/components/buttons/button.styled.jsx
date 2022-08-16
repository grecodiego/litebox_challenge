import styled from 'styled-components'

export const StyledButton = styled.button`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 56px;
	margin: 0 17% 0 17%;
	color: ${({ textColor }) => textColor};
	opacity: ${({ disabled }) => (disabled === false ? '100%' : '50%')};
	background-color: ${({ background }) => background};
	border: ${({ border }) =>
		border === true ? '1px solid rgba(255, 255, 255, 0.5);' : 'none'};
	@media (min-width: 768px) {
		margin: 0;
		width: 248px;
	}
`

export const ImageIcon = styled.img`
	margin-right: 12px;
`

export const Text = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	padding-top: 4px;
	letter-spacing: 4px;
	font-family: 'Regular';
	color: ${({ textColor }) => textColor};
`
