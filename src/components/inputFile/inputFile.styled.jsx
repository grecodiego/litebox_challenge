import styled from 'styled-components'

export const StyledInputFileContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	height: 40%;
	justify-content: space-between;
	@media (min-width: 992px) {
		align-items: center;
		width: 100%;
	}
`

export const StyledInputFile = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.backgroundColor};
	border: 1px dashed ${({ theme }) => theme.secondaryColor};
	color: ${({ theme }) => theme.secondaryColor};
	display: flex;
	height: 56px;
	height: 81px;
	justify-content: center;
	margin-bottom: 20%;
	margin: 0 24px 0 24px;
	text-align: center;
	@media (min-width: 992px) {
		align-items: center;
		width: 60%;
	}
`

export const ImageIcon = styled.img`
	margin-right: 12px;
`

export const Text = styled.p`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 19px;
`

export const StyledInput = styled.input`
	display: none;
`

export const InputFilmName = styled.input`
	background-color: ${({ theme }) => theme.backgroundColor};
	border-radius: 0;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	color: ${({ theme }) => theme.secondaryColor};
	display: flex;
	font-family: 'Regular';
	font-size: 16px;
	font-weight: 700;
	height: 30px;
	letter-spacing: 4px;
	line-height: 16px;
	margin-bottom: 10vh;
	margin: 5% 17% 5% 17%;
	text-align: center;
	input::placeholder {
		color: white;
		font-size: 1.2em;
		font-weight: 400;
	}
	::placeholder {
		color: #fafafa;
	}
	@media (min-width: 992px) {
		margin: 5% 0 5% 0;
		width: 30%;
	}
`

export const ProgressBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin-bottom: 60px;
	width: 100%;
`

export const ProgressBarRail = styled.div`
	align-items: center;
	background-color: ${({ theme }) => theme.secondaryColor};
	display: flex;
	height: 4px;
	margin: 0 17% 0 17%;
`

export const ProgressBar = styled.div`
	background-color: ${({ theme }) => theme.primaryColor};
	height: 8px;
	width: ${({ percentage }) => percentage}%;
`

export const ProgressBarError = styled.div`
	background-color: #ff0000;
	height: 8px;
	width: 100%;
`

export const TextProgressBar = styled.p`
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 16.8px;
	line-height: 19px;
	margin: 0 17% 18px 17%;
`

export const ButtonProgressBar = styled.button`
	background-color: ${({ theme }) => theme.backgroundColor};
	border: none;
	color: ${({ theme, imageLoaded }) =>
		imageLoaded === true ? theme.primaryColor : theme.secondaryColor};
	font-family: 'Regular';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 16px;
	line-height: 19px;
	margin: 18px 17% 0 17%;
	text-align: right;
`
