import styled from 'styled-components'

export const StyledVideoList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 12%;
	overflow-x: hidden;
`

export const FilmsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: auto;
	width: 100%;
	margin-top: 7%;
	padding: 0% 10% 0 10%;
	animation: pulse2 4s;
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

export const Filter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: auto;
	width: 100%;
`
