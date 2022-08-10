import styled, { css } from 'styled-components'

export const StyledSubTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`
export const originDefault = css`
	color: ${({ theme }) => theme.secondaryColor};
	letter-spacing: 4px;
	font-weight: 200;
`

export const FirstPartOriginTitle = styled.h3`
	font-family: 'Light';
	padding-top: 3px;
	font-size: ${({ size }) => size}px;
	${originDefault}
`
export const SecondPartOriginTitle = styled.h3`
	font-family: 'Regular';
	font-size: ${({ size }) => size}px;
	${originDefault}
`
export const ImageIcon = styled.img`
	display: flex;
	height: fit-content;
`
