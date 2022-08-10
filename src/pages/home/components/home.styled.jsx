import styled from 'styled-components'

export const CenterDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`
export const LoadingText = styled.h1`
	display: flex;
	padding: 0 10% 0 10%;
	width: 100%;
	justify-content: center;
	text-transform: uppercase;
	height: auto;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	letter-spacing: 1vw;
	text-align: center;
	line-height: 78px;
	font-size: 15vw;
	font-family: 'Regular';
	font-style: normal;
	font-weight: 400;
`
