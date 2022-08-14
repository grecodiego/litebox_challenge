import styled from 'styled-components'

export const StyledVideoList = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 12%;
	overflow-x: hidden;
	height: fit-content;
`

export const FilmsContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	height: fit-content;
	width: 100%;
	margin-top: 7%;
	padding: 0% 10% 0 10%;
`

export const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 300px;
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
