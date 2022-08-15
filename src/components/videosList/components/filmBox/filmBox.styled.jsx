import styled from 'styled-components'

export const StyledFilmBox = styled.div`
	display: flex;
	width: 100%;
	margin-bottom: 7%;
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
	@media (min-width: 768px) {
		@keyframes pulse2 {
			0% {
				scale: 0;
			}
			100% {
				scale: 1;
			}
		}
		margin-bottom: 0%;
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
	background-position: center;
	@media (min-width: 768px) {
		height: 100%;
		width: 100%;
		min-height: 130px;
	}
`
export const BoxSize = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
export const PlayCircle = styled.svg`
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
	font-family: 'Regular';
	justify-content: center;
	padding-top: 3px;
	font-size: 16px;
	color: ${({ theme }) => theme.secondaryColor};
	letter-spacing: 4px;
	font-weight: 400;
	text-align: center;
	margin-top: 2px;
`

export const FilmTitleClicked = styled.h2`
	font-family: 'Regular';
	justify-content: center;
	padding-top: 3px;
	font-size: 12px;
	color: ${({ theme }) => theme.secondaryColor};
	letter-spacing: 4px;
	font-weight: 400;
	text-align: center;
	margin-top: 4px;
	padding-left: 12px;
`

export const BoxContentClicked = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: fl;
	width: 100%;
	height: 45vw;
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	@media (min-width: 768px) {
		height: 100%;
		width: 100%;
		min-height: 130px;
	}
`

export const RowContainerBottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 16px 16px 16px 16px;
`

export const RowContainerTop = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 16px 16px 16px 16px;
`

export const VoteAndStarContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const StarIcon = styled.img`
	display: flex;
	height: 12px;
	width: 12px;
	margin-right: 6px;
	margin-bottom: 3px;
`

export const TextBottom = styled.p`
	font-family: 'Regular';
	font-size: 14px;
	line-height: 12px;
	letter-spacing: 4px;
	font-weight: 400;
	letter-spacing: 2px;
	color: ${({ theme }) => theme.secondaryColor};
	text-align: center;
`
