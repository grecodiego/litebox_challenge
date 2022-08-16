import styled from 'styled-components'

export const StyledAddFilm = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;

	animation: apearText 5s;
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

	@media (min-width: 992px) {
		width: 100%;
		align-items: center;
	}
`

export const Title = styled.p`
	margin: 0vh 0 8vh 0;
	color: ${({ theme }) => theme.primaryColor};
	font-family: 'Regular';
	font-size: 22px;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 22px;
	text-align: center;
`

export const TextContainer = styled.div`
	display: flex;
	height: auto;
	padding-bottom: 130px;
	flex-direction: column;
`

export const CongratzText = styled.p`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 4px;
	line-height: 26px;
	margin-bottom: 32px;
	text-align: center;
`

export const Text = styled.p`
	padding: 0 12vw 0 12vw;
	color: #ffffff;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 32px;
	text-align: center;
`
