import styled from 'styled-components'

export const StyledBackgroundContainer = styled.div`
	display: flex;
	height: 585px;
	width: 100%;
	background-position: center;
	background-size: cover;

	@media (min-width: 992px) {
		position: fixed;
		height: 100%;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	height: 585px;
	width: 100%;
	background-position: center;
	background-size: cover;
	justify-content: center;
	align-items: flex-end;
	animation: down-image 4s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-out;

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
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	height: 585px;
	width: 100%;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;
	animation: pulses 6s;
	background-position: center;
	background-size: cover;

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
	display: flex;
	height: 193px;
	width: 100%;
	margin-bottom: -1%;
	background: linear-gradient(
		180deg,
		rgba(36, 36, 36, 0) 0%,
		${({ theme }) => theme.backgroundColor} 100%
	);

	@media (min-width: 992px) {
		display: none;
	}
`
