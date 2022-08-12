import styled from 'styled-components'

export const StyledMenu = styled.div`
	display: flex;
	position: fixed;
	flex-direction: column;
	padding: 116px 0 0 24px;
	z-index: 20;
	overflow-y: hidden;
	width: 100vw;
	height: 100%;
	left: -100%;
	justify-content: flex-start;
	background: ${({ theme }) => theme.backgroundColor};
	transition: all 1s ease-out;
	transform: ${({ menuOpen }) =>
		menuOpen ? `	translateX(100%) ` : `translateX:(-100%)`};
`
