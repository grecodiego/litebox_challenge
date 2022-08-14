import styled from 'styled-components'

export const StyledHomeContainer = styled.div`
	display: flex;
	position: relative;
	margin-top: -50%;
	flex-direction: column;
	background-color: transparent;
	height: auto;
	width: 100%;
`

export const Title = styled.h1`
	color: ${({ theme }) => theme.primaryColor};
	display: flex;
	flex-direction: row;
	font-family: 'Regular';
	font-size: 76px;
	line-height: 78px;
	font-style: normal;
	font-weight: 300;
	margin-top: 16px;
	justify-content: center;
	letter-spacing: 4vw;
	padding: 0 10% 5% 10%;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 136px;
`
