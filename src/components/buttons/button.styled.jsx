import styled from 'styled-components'

export const StyledButton = styled.button`
	align-items: center;
	background-color: ${({ background }) => background};
	border: ${({ border }) =>
		border === true ? '1px solid rgba(255, 255, 255, 0.5);' : 'none'};
	color: ${({ textColor }) => textColor};
	display: flex;
	height: 56px;
	justify-content: center;
	margin: 0 17% 0 17%;
	opacity: ${({ disabled }) => (disabled === false ? '100%' : '50%')};
	text-align: center;

	animation: apears 2s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in;

	@keyframes apearButtons {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}
	@media (min-width: 992px) {
		width: 248px;
		margin: 0;
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

	animation: apearText 3s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;

	@keyframes apearText {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}
`
