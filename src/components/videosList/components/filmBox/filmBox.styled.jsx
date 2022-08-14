import styled from 'styled-components'

export const StyledFilmBox = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 7%;
	border-radius: 4px;
	animation: pulse2 ${({ index }) => (index + 1) * 1.5}s;
	animation-timing-function: ease-in-out;
	@keyframes pulse2 {
		0% {
			margin-left: 100%;
		}
		100% {
			margin-left: 0%;
		}
	}
`

export const BoxContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 45vw;
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-repeat: no-repeat;
`
export const PlayCircle = styled.img`
	display: flex;
	height: fit-content;
	width: fit-content;
	padding: 12px 0 24px 0;
`
export const FilmTitle = styled.h2`
	font-family: 'Regular';
	padding-top: 3px;
	font-size: 16px;
	color: #ffffff;
	letter-spacing: 4px;
	font-weight: 400;
	text-align: center;
`
