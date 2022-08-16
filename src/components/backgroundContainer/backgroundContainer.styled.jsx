import styled from 'styled-components'

export const StyledBackgroundContainer = styled.div`
	background-position: center;
	background-size: cover;
	display: flex;
	height: 585px;
	width: 100%;
	@media (min-width: 992px) {
		height: 100%;
		position: fixed;
	}
`

export const ImageContainer = styled.div`
	align-items: flex-end;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;
	animation: down-image 4s;
	background-position: center;
	background-size: cover;
	display: flex;
	height: 585px;
	justify-content: center;
	width: 100%;
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
	@media (min-width: 992px) {
		animation-timing-function: ease-in-out;
		height: auto;
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
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
	animation: pulses 6s;
	background-position: center;
	background-size: cover;
	display: flex;
	height: 585px;
	left: 0%;
	position: fixed;
	top: 0;
	width: 100%;
	@keyframes pulses {
		0% {
			background-color: ${({ theme }) => theme.backgroundColor};
		}
		100% {
			background-color: none;
		}
	}
	@media (min-width: 992px) {
		height: 100%;
		position: relative;
	}
`

export const GradientBackground = styled.div`
	background: linear-gradient(
		180deg,
		rgba(36, 36, 36, 0) 0%,
		${({ theme }) => theme.backgroundColor} 100%
	);
	display: flex;
	height: 193px;
	margin-bottom: -1%;
	width: 100%;
	@media (min-width: 992px) {
		display: none;
	}
`
