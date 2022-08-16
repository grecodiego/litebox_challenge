import styled from 'styled-components'

export const VideosContainer = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	flex-direction: column;
	margin-top: 12%;
	overflow-x: hidden;
	overflow-y: hidden;
	height: auto;
	@media (min-width: 992px) {
		margin-top: 8%;
		margin-bottom: 3%;
		width: 25%;
		height: auto;
	}
`

export const StyledVideoList = styled.div`
	display: flex;
	width: 100%;
	min-height: fit-content;
	flex-direction: column;
	align-items: center;
	@media (min-width: 992px) {
		margin-top: 3%;
		height: 100%;
		min-height: auto;
		width: 100%;
	}
`

export const FilmsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: fit-content;
	min-height: 50vh;
	width: 100%;
	margin-top: 7%;
	padding: 0% 10% 0 10%;
	@media (min-width: 992px) {
		height: 100%;
		justify-content: space-evenly;
		margin-top: 0;
		padding: 0;
		width: 100%;
	}
`

export const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 300px;
	@media (min-width: 992px) {
		min-height: auto;
	}
`

export const LoadingText = styled.h1`
	display: flex;
	text-align: center;
	padding: 0 10% 0 10%;
	width: 100%;
	justify-content: center;
	text-transform: uppercase;
	height: auto;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	letter-spacing: 1vw;
	text-align: center;
	line-height: 24px;
	font-size: 24px;
	font-family: 'Regular';
	font-style: normal;
	font-weight: 400;
`
