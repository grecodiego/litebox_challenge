import { NavContainer } from './navBar.styled'
import { UserAvatar } from './components/userAvatar/userAvatar'
import { MenuButton } from './components/menuButton/menuButton.jsx'
import { BrandTitle } from './components/brandTitle/brandTitle'
import { Menu } from '../menu/menu'
import React, { useState } from 'react'

export function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const body = document.querySelector('body')

	function handleMenuButton() {
		setMenuOpen(!menuOpen)
		if (menuOpen === false) {
			body.style.position = 'fixed'
		} else {
			body.style.position = 'static'
		}
	}

	return (
		<>
			<Menu menuOpen={menuOpen} handleMenuButton={handleMenuButton} />
			<NavContainer>
				<MenuButton menuOpen={menuOpen} handleMenuButton={handleMenuButton} />
				<BrandTitle />
				<UserAvatar />
			</NavContainer>
		</>
	)
}
