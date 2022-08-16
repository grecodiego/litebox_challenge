import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
	align-items: center;
	display: flex;
	height: 36;
	justify-content: space-between;
	left: 0;
	padding: 12px 15px 0 15px;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 100;
	@media (min-width: 992px) {
		justify-content: flex-start;
		padding: 35px 5% 0 5%;
	}
`

export const InvisibleContainerForDesktop = styled.button`
	background-color: transparent;
	border: none;
	display: none;
	width: 100%;
	@media (min-width: 992px) {
		display: flex;
	}
`

export const ImageIcon = styled.img`
	display: none;
	margin: 0 40px 0 40px;
	@media (min-width: 992px) {
		display: flex;
	}
`

export const ImageIconPlus = styled.img`
	display: flex;
	margin: -2px 12px 0 0;
`

export const StyledLink = styled(Link)`
	align-items: center;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.secondaryColor};
	display: none;
	flex-direction: row;
	font-family: 'Regular';
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	height: 28px;
	justify-content: flex-start;
	letter-spacing: 4px;
	line-height: 18px;
	margin-left: 52px;
	min-width: fit-content;
	padding: 0 12px 0 12px;
	@media (min-width: 992px) {
		display: flex;
	}
`
