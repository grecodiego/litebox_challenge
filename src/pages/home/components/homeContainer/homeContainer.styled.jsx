import styled from 'styled-components'

export const StyledHomeContainer = styled.div`
	background-color: transparent;
	display: flex;
	flex-direction: column;
	height: auto;
	margin-top: -220px;
	position: relative;
	width: 100%;
	@media (min-width: 768px) {
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
	font-family: 'Regular';
	font-size: 76px;
	font-style: normal;
	font-weight: 300;
	justify-content: center;
	letter-spacing: 4vw;
	line-height: 78px;
	margin-top: 16px;
	padding: 0 10% 36px 10%;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
	@media (min-width: 768px) {
		text-align: left;
		margin-top: 0px;
		padding: 24px 0 32px 0;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 136px;
	justify-content: space-between;
	@media (min-width: 768px) {
		flex-direction: row;
		width: 520px;
	}
`

export const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (min-width: 768px) {
		width: 70%;
		justify-content: flex-end;
		align-items: flex-start;
	}
`
