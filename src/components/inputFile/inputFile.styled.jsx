import styled from 'styled-components'

export const StyledInputFile = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 56px;
	height: 81px;
	margin: 0 24px 0 24px;
	color: ${({ theme }) => theme.secondaryColor};
	background-color: ${({ theme }) => theme.backgroundColor};
	border: 1px dashed ${({ theme }) => theme.secondaryColor};
	margin-bottom: 14vh;
`
export const ImageIcon = styled.img`
	margin-right: 12px;
`
export const Text = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	padding-top: 5px;
	font-family: 'Light';
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.secondaryColor};
`

export const StyledInput = styled.input`
	display: none;
`

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 136px;
`
export const InputFilmName = styled.input`
	display: flex;
	background-color: ${({ theme }) => theme.backgroundColor};
	margin: 0 17% 0 17%;
	height: 30px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	margin-bottom: 10vh;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Light';
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 4px;
	border-radius: 0;
	input::placeholder {
		color: white;
		font-size: 1.2em;
		font-style: 'Ligth';
	}
	::placeholder {
		/* Most modern browsers support this now. */
		color: #fafafa;
	}
`
