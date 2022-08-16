import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	display: flex;
	height: 36;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 12px 15px 0 15px;

	@media (min-width: 992px) {
		justify-content: flex-start;
		padding: 35px 5% 0 5%;
	}
`

export const InvisibleContainerForDesktop = styled.button`
	display: none;
	width: 100%;
	background-color: transparent;
	border: none;

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
	display: none;
	height: 28px;
	align-items: center;
	padding: 0 12px 0 12px;
	margin-left: 52px;
	justify-content: flex-start;
	background-color: transparent;
	min-width: fit-content;
	border: none;
	color: ${({ theme }) => theme.secondaryColor};
	flex-direction: row;
	font-family: 'Regular';
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	letter-spacing: 4px;
	line-height: 18px;

	@media (min-width: 992px) {
		display: flex;
	}
`
