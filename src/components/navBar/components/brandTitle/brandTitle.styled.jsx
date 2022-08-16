import styled from 'styled-components'

export const TitleContainer = styled.div`
	display: none;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	letter-spacing: 4px;
	text-align: center;
	font-size: 28px;
	line-height: 28px;
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
