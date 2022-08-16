import styled from 'styled-components'

export const StyledSubTitle = styled.div`
	display: flex;
	width: auto;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`
export const Text = styled.p`
	display: flex;
	width: auto;
	color: ${({ theme }) => theme.secondaryColor};
	font-family: ${({ fontFamily }) => fontFamily};
	font-size: ${({ size }) => size}px;
	font-weight: 200;
	letter-spacing: 4px;
`
