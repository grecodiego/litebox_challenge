import styled from 'styled-components'

export const StyledBackgroundContainer = styled.div`
	display: flex;
	height: 585px;
	width: 100%;
	background-position: center;
	background-size: cover;
`
export const ImageContainer = styled.div`
	display: flex;
	align-items: flex-end;
	height: 585px;
	width: 100%;
	justify-content: center;
	background-position: center;
	background-size: cover;
	animation: down-image;
	animation-duration: 2s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	@keyframes down-image {
		0% {
			margin-top: -100%;
		}
		100% {
			margin-top: -5%;
		}
	}
	${(props) =>
		`
			background-image: url(${props.backgroundImage});
		`}
`

export const BackgroundAnimation = styled.div`
	display: flex;
	height: 585px;
	width: auto;
	background-position: center;
	background-size: cover;
	animation: pulses 7s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	@keyframes pulses {
		0% {
			background-color: ${({ theme }) => theme.backgroundColor};
		}
		100% {
			background-color: transparent;
		}
	}
`

export const GradientBackground = styled.div`
	display: flex;
	margin-bottom: -1%;
	width: 100%;
	height: 200px;
	background: linear-gradient(
		180deg,
		rgba(36, 36, 36, 0) 0%,
		${({ theme }) => theme.backgroundColor} 100%
	);
`
