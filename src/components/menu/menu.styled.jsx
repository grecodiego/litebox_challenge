import styled from 'styled-components'

export const StyledMenu = styled.div`
	background: ${({ theme }) => theme.backgroundColor};
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-start;
	left: -110%;
	overflow-y: hidden;
	padding: 116px 0 0 24px;
	position: fixed;
	transition: all 1s ease-out;
	transform: ${({ isOpen }) =>
		isOpen ? `	translateX(110%) ` : `translateX:(-110%)`};
	width: 100vw;
	z-index: 20;
`
