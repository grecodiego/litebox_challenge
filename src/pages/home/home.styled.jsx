import styled from 'styled-components'

export const CenterDiv = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100%;
`

export const LoadingText = styled.h1`
	display: flex;
	height: auto;
	width: 100%;
	padding: 0 10% 0 10%;
	justify-content: center;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	font-family: 'Regular';
	font-size: 15vw;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 1vw;
	line-height: 78px;
	text-align: center;
	text-transform: uppercase;
`
