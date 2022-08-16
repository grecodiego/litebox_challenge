import styled from 'styled-components'

export const StyledSubTitle = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: auto;
`
export const Text = styled.p`
	color: ${({ theme }) => theme.secondaryColor};
	display: flex;
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ size }) => size}px;
	font-weight: 200;
	letter-spacing: 4px;
	width: auto;
`
