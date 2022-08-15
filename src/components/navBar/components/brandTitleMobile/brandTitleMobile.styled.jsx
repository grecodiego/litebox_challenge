import styled from 'styled-components'

export const TitleContainer = styled.div`
	display: none;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	letter-spacing: 4px;
	text-align: center;
	font-size: 28px;
	line-height: 28px;

	@media (max-width: 768px) {
		display: flex;
	}
`

export const FirstTitlePart = styled.p`
	font-family: 'Regular';
	font-style: normal;
	font-weight: 700;
`

export const SecondTitlePart = styled.p`
	display: flex;
	font-family: 'Light';
	font-style: normal;
	font-weight: 700;
`
