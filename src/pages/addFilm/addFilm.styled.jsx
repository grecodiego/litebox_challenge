import styled from 'styled-components'

export const StyledAddFilm = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	@media (min-width: 992px) {
		align-items: center;
		width: 100%;
	}
`

export const Title = styled.p`
	color: ${({ theme }) => theme.primaryColor};
	font-family: 'Regular';
	font-size: 22px;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 22px;
	margin: 0vh 0 8vh 0;
	text-align: center;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	padding-bottom: 130px;
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
	color: #ffffff;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 32px;
	padding: 0 12vw 0 12vw;
	text-align: center;
`
