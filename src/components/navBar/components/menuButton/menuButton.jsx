import { BottomLine, MidLine, StyledMenu, TopLine } from './menuButton.styled'
import { Fragment } from 'react'

export const MenuButton = ({ closeMenu, isOpen }) => {
	return (
		<Fragment>
			<StyledMenu value={isOpen} onClick={closeMenu}>
				<TopLine value={isOpen} />
				<MidLine value={isOpen} />
				<BottomLine value={isOpen} />
			</StyledMenu>
		</Fragment>
	)
}
