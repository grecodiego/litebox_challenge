import styled from 'styled-components'

export const StyledAddFilm = styled.div`
	display: flex;
	flex-direction: column;
`
export const Title = styled.p`
	font-family: 'Regular';
	font-weight: 400;
	font-size: 22px;
	line-height: 22px;
	text-align: center;
	letter-spacing: 4px;
	margin: 19vh 0 8vh 0;
	color: ${({ theme }) => theme.primaryColor};
`
