import styled, { css } from 'styled-components'

const defaultButton = css`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 56px;
`

export const PrimaryStyledButton = styled.button`
	${defaultButton};
	margin: 0 17% 0 17%;
	color: ${({ theme }) => theme.secondaryColor};
	background-color: ${({ theme }) => theme.backgroundColor};
	border: ${({ border }) =>
		border === true ? '1px solid rgba(255, 255, 255, 0.5);' : 'none'};
`
export const SecundaryStyledButton = styled.button`
	${defaultButton};
	margin: 0 17% 0 17%;
	color: ${({ theme }) => theme.secondaryColor};
	border: none;
	background-color: ${({ imageOnDrop, filmNameInputValue }) =>
		imageOnDrop !== false && filmNameInputValue.length > 0
			? '#FFFFFF'
			: '#919191'};
`
export const ImageIcon = styled.img`
	margin-right: 12px;
`

const defaultText = css`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	padding-top: 5px;
	font-family: 'Light';
`

export const PrimaryText = styled.p`
	${defaultText}
	color: ${({ theme }) => theme.secondaryColor};
`

export const SecundaryText = styled.p`
	${defaultText}
	color: ${({ theme }) => theme.backgroundColor};
`
