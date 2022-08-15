import styled from 'styled-components'

export const StyledBackgroundContainer = styled.div`
	display: flex;
	height: 585px;
	width: 100%;
	background-position: center;
	background-size: cover;

	@media (min-width: 768px) {
		height: 100%;
		position: fixed;
	}
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
	animation-duration: 4s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	@keyframes down-image {
		0% {
			margin-top: -100%;
		}
		100% {
			margin-top: 0%;
		}
	}
	${(props) =>
		`
			background-image: url(${props.backgroundImage});
		`}
	@media (min-width: 768px) {
		height: auto;
		animation-timing-function: ease-in-out;
		@keyframes down-image {
			0% {
				scale: 1.4;
			}
			100% {
				scale: 1;
			}
		}
	}
`

export const BackgroundAnimation = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	left: 0%;
	height: 585px;
	width: 100%;
	background-position: center;
	background-size: cover;
	animation: pulses 6s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	@keyframes pulses {
		0% {
			background-color: ${({ theme }) => theme.backgroundColor};
		}
		100% {
			background-color: none;
		}
	}

	@media (min-width: 768px) {
		height: 100%;
		position: relative;
	}
`

export const GradientBackground = styled.div`
	display: flex;
	margin-bottom: -1%;
	width: 100%;
	height: 193px;
	background: linear-gradient(
		180deg,
		rgba(36, 36, 36, 0) 0%,
		${({ theme }) => theme.backgroundColor} 100%
	);
	@media (min-width: 768px) {
		display: none;
	}
`
