import { NavContainer } from './navBar.styled'
import { UserAvatar } from './components/userAvatar/userAvatar'
import { MenuButton } from './components/menuButton/menuButton.jsx'
import { BrandTitle } from './components/brandTitle/brandTitle'

export function NavBar() {
	return (
		<>
			<NavContainer>
				<MenuButton />
				<BrandTitle />
				<UserAvatar />
			</NavContainer>
		</>
	)
}
