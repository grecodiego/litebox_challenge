import styled from 'styled-components'

export const StyledInputFileContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
`

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
	margin-bottom: 20%;
`

export const ImageIcon = styled.img`
	margin-right: 12px;
`

export const Text = styled.p`
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	font-family: 'Regular';
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.secondaryColor};
`

export const StyledInput = styled.input`
	display: none;
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
	font-family: 'Regular';
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 4px;
	border-radius: 0;
	input::placeholder {
		color: white;
		font-size: 1.2em;
		font-weight: 400;
	}
	::placeholder {
		/* Most modern browsers support this now. */
		color: #fafafa;
	}
`

export const ProgressBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	margin-bottom: 60px;
`

export const ProgressBarRail = styled.div`
	display: flex;
	margin: 0 17% 0 17%;
	background-color: ${({ theme }) => theme.secondaryColor};
	align-items: center;
	height: 4px;
`

export const ProgressBar = styled.div`
	width: ${({ percentage }) => percentage}%;
	background-color: ${({ theme }) => theme.primaryColor};
	height: 8px;
`

export const ProgressBarError = styled.div`
	width: 100%;
	background-color: #ff0000;
	height: 8px;
`

export const TextProgressBar = styled.p`
	font-style: normal;
	margin: 0 17% 18px 17%;
	font-weight: 400;
	line-height: 16.8px;
	letter-spacing: 4px;
	font-family: 'Regular';
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme }) => theme.secondaryColor};
`

export const ButtonProgressBar = styled.button`
	font-style: normal;
	background-color: ${({ theme }) => theme.backgroundColor};
	border: none;
	font-weight: 400;
	text-align: right;
	line-height: 16px;
	letter-spacing: 4px;
	font-family: 'Regular';
	font-size: 16px;
	line-height: 19px;
	color: ${({ theme, imageLoaded }) =>
		imageLoaded === true ? theme.primaryColor : theme.secondaryColor};
	margin: 18px 17% 0 17%;
`
