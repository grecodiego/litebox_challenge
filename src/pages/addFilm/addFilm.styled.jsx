import styled from 'styled-components'

export const StyledAddFilm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	justify-content: center;
	height: 100vh;
`
export const Title = styled.p`
	font-family: 'Regular';
	font-weight: 400;
	font-size: 22px;
	line-height: 22px;
	text-align: center;
	letter-spacing: 4px;
	margin: 0vh 0 8vh 0;
	color: ${({ theme }) => theme.primaryColor};
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
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 26px;
	text-align: center;
	letter-spacing: 4px;
	margin-bottom: 32px;
`
export const Text = styled.p`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 32px;
	text-align: center;
	letter-spacing: 4px;
	color: #ffffff;
	padding: 0 12vw 0 12vw;
`
