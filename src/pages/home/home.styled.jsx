import styled from 'styled-components'

export const CenterDiv = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100%;
`

export const LoadingText = styled.h1`
	color: ${({ theme }) => theme.primaryColor};
	display: flex;
	flex-direction: row;
	font-family: 'Regular';
	font-size: 15vw;
	font-style: normal;
	font-weight: 400;
	height: auto;
	justify-content: center;
	letter-spacing: 1vw;
	line-height: 78px;
	padding: 0 10% 0 10%;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`
