import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavContainer = styled.nav`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	justify-content: space-between;
	align-items: center;
	height: 36;
	padding: 12px 15px 0 15px;

	@media (min-width: 768px) {
		justify-content: flex-start;
		padding: 35px 5% 0 5%;
	}
`
export const InvisibleContainerForDesktop = styled.button`
	display: none;
	width: 100%;
	border: none;
	background-color: transparent;
	@media (min-width: 768px) {
		display: flex;
	}
`
export const ImageIcon = styled.img`
	display: none;
	margin: 0 40px 0 40px;
	@media (min-width: 768px) {
		display: flex;
	}
`
export const ImageIconPlus = styled.img`
	display: flex;
	margin: -2px 12px 0 0;
`
export const StyledLink = styled(Link)`
	display: none;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	min-width: fit-content;
	height: 28px;
	border: none;
	background-color: transparent;
	padding: 0 12px 0 12px;
	margin-left: 52px;
	font-family: 'Regular';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: 4px;
	color: ${({ theme }) => theme.secondaryColor};

	@media (min-width: 768px) {
		display: flex;
	}
`
