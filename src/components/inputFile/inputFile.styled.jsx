import styled from 'styled-components'

export const StyledInputFileContainer = styled.div`
	display: flex;
	height: 40%;
	margin-bottom: 24px;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 992px) {
		align-items: center;
		width: 100%;
	}
`

export const StyledInputFile = styled.div`
	display: flex;
	height: 81px;
	margin-bottom: 20%;
	margin: 0 24px 0 24px;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: ${({ theme }) => theme.secondaryColor};
	background-color: ${({ theme }) => theme.backgroundColor};
	border: 1px dashed ${({ theme }) => theme.secondaryColor};

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
	display: flex;
	height: 30px;
	margin: 5% 17% 5% 17%;
	background-color: ${({ theme }) => theme.backgroundColor};
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
	color: ${({ theme }) => theme.secondaryColor};
	text-align: center;
	font-family: 'Regular';
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 4px;
	line-height: 16px;
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
	display: flex;
	height: 4px;
	margin: 0 17% 0 17%;
	align-items: center;
	background-color: ${({ theme }) => theme.secondaryColor};
`

export const ProgressBar = styled.div`
	height: 8px;
	width: ${({ percentage }) => percentage}%;
	background-color: ${({ theme }) => theme.primaryColor};
`

export const ProgressBarError = styled.div`
	height: 8px;
	width: 100%;
	background-color: #ff0000;
`

export const TextProgressBar = styled.p`
	margin: 0 17% 18px 17%;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: 'Regular';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 16.8px;
`

export const ButtonProgressBar = styled.button`
	margin: 18px 17% 0 17%;
	background-color: ${({ theme }) => theme.backgroundColor};
	border: none;
	text-align: right;
	color: ${({ theme, imageLoaded }) =>
		imageLoaded === true ? theme.primaryColor : theme.secondaryColor};
	font-family: 'Regular';
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	letter-spacing: 4px;
	line-height: 16px;
`
