import { NavContainer } from './navBar.styled'
import { UserAvatar } from './components/userAvatar/userAvatar'
import { MenuButton } from './components/menuButton/menuButton.jsx'
import { BrandTitle } from './components/brandTitle/brandTitle'
import { Menu } from '../menu/menu'
import React, { useState } from 'react'

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
				<MenuButton isOpen={isOpen} closeMenu={closeMenu} />
				<BrandTitle />
				<UserAvatar />
			</NavContainer>
		</>
	)
}
