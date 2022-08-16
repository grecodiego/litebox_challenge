import styled from 'styled-components'

export const TitleContainer = styled.div`
	display: none;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	font-size: 28px;
	letter-spacing: 4px;
	line-height: 28px;
	text-align: center;
	${({ mobile }) =>
		mobile === true
			? `@media (max-width: 992px) {
		display: flex;
	}`
			: `@media (min-width: 992px) {
		display: flex;
	}`}
`

export const Text = styled.p`
	margin-top: 2px;
	font-family: ${({ weigth }) => weigth};
	font-style: normal;
	font-weight: 700;
`
