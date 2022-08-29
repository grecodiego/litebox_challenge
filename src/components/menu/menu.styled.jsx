import styled from 'styled-components'

export const StyledMenu = styled.div`
	position: absolute;
	left: -110%;
	z-index: 20;
	display: flex;
	height: 100%;
	width: 100vw;
	padding: 116px 0 0 24px;
	justify-content: flex-start;
	flex-direction: column;
	background: ${({ theme }) => theme.backgroundColor};
	overflow-y: hidden;
	transition: all 1s ease-out;
	transform: ${({ isOpen }) =>
		isOpen ? `	translateX(110%) ` : `translateX:(-110%)`};
`
