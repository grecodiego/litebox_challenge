import styled from 'styled-components'

export const StyledFilmBox = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 7%;
	border-radius: 4px;
	animation: pulse2 ${({ index }) => (index + 1) * 1.5}s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;

	@keyframes pulse2 {
		0% {
			margin-left: 100%;
		}
		100% {
			margin-left: 0%;
		}
	}

	@media (min-width: 992px) {
		margin-bottom: 0%;
	}
`

export const BoxContent = styled.div`
	display: flex;
	width: 100%;
	height: 26vh;
	align-items: center;
	margin-bottom: 1em;
	flex-direction: column;
	justify-content: ${({ isClicked }) =>
		isClicked === true ? `flex-end` : `center`};
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	@media (min-width: 992px) {
		height: 17vh;
	}
`

export const BoxSize = styled.div`
	display: flex;
	height: 33.33%;
	width: 100%;
	align-items: center;
	justify-content: center;
`

export const PlayCircle = styled.svg`
	display: flex;
	height: 48px;
	width: 48px;
	border-radius: 50%;
	background-color: #242424;
	opacity: 0.5;
	:hover {
		background-color: ${({ theme }) => theme.primaryColor};
		opacity: 1;
		circle,
		path {
			stroke: black;
		}
	}

	@media (min-width: 992px) {
		height: 40px;
		width: 40px;
	}
`

export const MiniPlayCircle = styled.svg`
	display: flex;
	height: 24px;
	width: 24px;
	border-radius: 50%;
	background-color: #242424;
	opacity: 0.5;
	:hover {
		background-color: ${({ theme }) => theme.primaryColor};
		opacity: 1;
		circle,
		path {
			stroke: black;
		}
	}
`

export const FilmTitle = styled.h2`
	display: flex;
	margin-top: 2px;
	padding-top: 3px;
	justify-content: center;
	font-family: 'Regular';
	font-size: 16px;
	color: ${({ theme }) => theme.secondaryColor};
	letter-spacing: 4px;
	font-weight: 400;
	text-align: center;

	@media (min-width: 992px) {
		width: auto;
	}
`

export const FilmTitleClicked = styled.h2`
	margin-top: 4px;
	padding-left: 12px;
	justify-content: center;
	font-family: 'Regular';
	font-size: 12px;
	color: ${({ theme }) => theme.secondaryColor};
	letter-spacing: 4px;
	font-weight: 400;
	text-align: center;

	@media (min-width: 992px) {
		max-width: 200px;
	}
`

export const RowContainerTop = styled.div`
	display: flex;
	padding: 16px 16px 16px 16px;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
`

export const RowContainerBottom = styled.div`
	display: flex;
	width: 100%;
	padding: 16px 16px 16px 16px;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`

export const VoteAndStarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
`

export const StarIcon = styled.img`
	display: flex;
	height: 12px;
	width: 12px;
	margin-right: 6px;
	margin-bottom: 3px;
`

export const TextBottom = styled.p`
	text-align: center;
	font-family: 'Regular';
	font-size: 14px;
	line-height: 12px;
	letter-spacing: 4px;
	font-weight: 400;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.secondaryColor};
`
