import styled from 'styled-components'

export const TitleContainer = styled.div`
	color: ${({ theme }) => theme.primaryColor};
	display: none;
	flex-direction: row;
	font-size: 28px;
	letter-spacing: 4px;
	line-height: 28px;
	text-align: center;
	${({ mobile }) =>
		mobile === true
			? `@media (max-width: 768px) {
		display: flex;
	}`
			: `@media (min-width: 768px) {
		display: flex;
	}`}
`

export const Text = styled.p`
	font-family: ${({ weigth }) => weigth};
	font-style: normal;
	font-weight: 700;
	margin-top: 2px;
`
