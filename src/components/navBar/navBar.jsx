import {
	ImageIcon,
	ImageIconPlus,
	InvisibleContainerForDesktop,
	NavContainer,
	StyledLink,
} from './navBar.styled'
import { BrandTitle } from './components/brandTitle/brandTitle'
import { Menu } from '../menu/menu'
import { MenuButton } from './components/menuButton/menuButton.jsx'
import { useLocation } from 'react-router-dom'
import { UserAvatar } from './components/userAvatar/userAvatar'
import Bell from '../../assets/images/png/bell.png'
import Plus from '../../assets/images/png/plus.png'
import React, { useState } from 'react'
import { Fragment } from 'react'

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	function closeMenu() {
		setIsOpen(!isOpen)
	}
	return (
		<Fragment>
			<Menu closeMenu={closeMenu} />
			<NavContainer>
				<BrandTitle mobile={false} />
				{location.pathname === '/add-film' ? null : (
					<StyledLink to={'/add-film'}>
						<ImageIconPlus src={Plus} />
						AGREGÁR PELICULA
					</StyledLink>
				)}
				<InvisibleContainerForDesktop />
				<MenuButton closeMenu={closeMenu} isOpen={isOpen} />
				<BrandTitle mobile={true} />
				<ImageIcon src={Bell} />
				<UserAvatar />
			</NavContainer>
		</Fragment>
	)
}
