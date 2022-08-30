import {
	ImageIcon,
	IconPlus,
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
import { useState } from 'react'
import { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group'

export function NavBar() {
	const [isOpen, setIsOpen] = useState(false)
	const location = useLocation()

	function closeMenu() {
		setIsOpen(!isOpen)
	}
	return (
		<Fragment>
			<Menu closeMenu={closeMenu} isOpen={isOpen} />
			<NavContainer>
				<BrandTitle mobile={false} />
				{location.pathname === '/add-film' ? null : (
					<CSSTransition timeout={300} classNames='transition' in={!isOpen}>
						<StyledLink to={'/add-film'}>
							<IconPlus>
								<path d='M7 0V14' stroke='currentColor' />
								<path d='M14 7L-5.96046e-08 7' stroke='currentColor' />
							</IconPlus>
							AGREGAR PELICULA
						</StyledLink>
					</CSSTransition>
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
