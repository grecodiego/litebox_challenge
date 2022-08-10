import styled from 'styled-components'

export const StyledBackgroundContainer = styled.div`
	display: flex;
	align-items: flex-end;
	height: 585px;
	width: 100%;
	justify-content: center;
	background-position: center;
	background-size: cover;
	animation: pulse 3s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;

	${(props) =>
		`
			background-image: url(${props.backgroundImage});
		`}
	@keyframes pulse {
		0% {
			top: -50%;
		}
		100% {
			top: -5%;
		}
	}
`

export const BackgroundAnimation = styled.div`
	position: fixed;
	height: 168vw;
	width: auto;
	top: 0%;
	left: 0;
	bottom: 0;
	right: 0;
	background-position: center;
	background-size: cover;
	animation: pulses 5s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;

	@keyframes pulses {
		0% {
			background-color: #242424;
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
	background: linear-gradient(180deg, rgba(36, 36, 36, 0) 0%, #242424 100%);
`
