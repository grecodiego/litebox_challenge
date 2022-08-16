import {
	NavContainer,
	InvisibleContainerForDesktop,
	ImageIcon,
	StyledLink,
	ImageIconPlus,
} from './navBar.styled'
import { UserAvatar } from './components/userAvatar/userAvatar'
import { MenuButton } from './components/menuButton/menuButton.jsx'
import { BrandTitle } from './components/brandTitle/brandTitle'
import { Menu } from '../menu/menu'
import React, { useState } from 'react'
import Bell from '../../assets/images/png/bell.png'
import Plus from '../../assets/images/png/plus.png'

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const body = document.querySelector('body')

	function closeMenu() {
		setIsOpen(!isOpen)
		if (isOpen === false) {
			body.style.position = 'fixed'
		} else {
			body.style.position = 'static'
		}
	}

	return (
		<>
			<Menu isOpen={isOpen} closeMenu={closeMenu} />
			<NavContainer>
				<BrandTitle mobile={false} />

				<StyledLink to={'/add-film'}>
					<ImageIconPlus src={Plus} />
					AGREGÁR PELICULA
				</StyledLink>
				<InvisibleContainerForDesktop />
				<MenuButton isOpen={isOpen} closeMenu={closeMenu} />
				<BrandTitle mobile={true} />

				<ImageIcon src={Bell} />
				<UserAvatar />
			</NavContainer>
		</>
	)
}
