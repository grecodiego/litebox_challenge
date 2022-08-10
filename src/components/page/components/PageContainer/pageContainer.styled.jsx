import styled from 'styled-components'

export const StyledPageContainer = styled.div`
	display: flex;
	position: relative;
	margin-top: -40%;
	flex-direction: column;
	background-color: transparent;
	height: auto;
	width: 100%;
	overflow-y: hidden;
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.primaryColor};
	display: flex;
	flex-direction: row;
	font-family: 'Regular';
	font-size: 18vw;
	font-style: normal;
	font-weight: 300;
	height: auto;
	margin-top: 0%;
	justify-content: center;
	letter-spacing: 4vw;
	padding: 0 10% 5% 10%;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`
