import styled from 'styled-components'

export const VideosContainer = styled.div`
	display: flex;
	height: auto;
	margin-top: 12%;
	align-items: flex-end;
	justify-content: flex-start;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: hidden;

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
		height: 100%;
		width: 100%;
		min-height: auto;
		margin-top: 3%;
	}
`

export const FilmsContainer = styled.div`
	display: flex;
	height: fit-content;
	width: 100%;
	min-height: 50vh;
	margin-top: 7%;
	padding: 0% 10% 0 10%;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;

	@media (min-width: 992px) {
		height: 100%;
		width: 100%;
		margin-top: 0;
		padding: 0;
		justify-content: flex-start;
	}
`

export const CenterDiv = styled.div`
	display: flex;
	min-height: 300px;
	width: 100%;
	justify-content: center;
	align-items: center;
	@media (min-width: 992px) {
		min-height: auto;
	}
`

export const LoadingText = styled.h1`
	display: flex;
	height: auto;
	width: 100%;
	padding: 0 10% 0 10%;
	justify-content: center;
	text-align: center;
	text-transform: uppercase;
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
