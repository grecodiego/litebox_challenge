import styled from 'styled-components'

export const StyledHomeContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	height: auto;
	margin-top: -220px;
	position: relative;
	width: 100%;
	@media (min-width: 992px) {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		justify-content: space-between;
		flex-direction: row;
		margin-top: 0;
		padding: 0 5% 0 5%;
	}
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.primaryColor};
	font-family: 'Bold';
	font-size: 76px;
	font-style: normal;
	font-weight: 900;
	justify-content: center;
	letter-spacing: 4vw;
	line-height: 100px;
	margin-top: 16px;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
	animation: apearsTitle 5s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in;

	@keyframes apearsTitle {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 100;
		}
	}
	@media (min-width: 992px) {
		text-align: left;
		margin-top: 0px;
		padding: 24px 0 32px 0;
		width: 80%;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 136px;
	justify-content: space-between;

	@media (min-width: 992px) {
		flex-direction: row;
		width: 520px;
	}
`

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 992px) {
		width: 75%;
		justify-content: flex-end;
		align-items: flex-start;
	}
`
