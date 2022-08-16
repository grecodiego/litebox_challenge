import { BottomLine, MidLine, StyledMenu, TopLine } from './menuButton.styled'

export const MenuButton = ({ closeMenu, isOpen }) => {
	return (
		<>
			<StyledMenu value={isOpen} onClick={closeMenu}>
				<TopLine value={isOpen} />
				<MidLine value={isOpen} />
				<BottomLine value={isOpen} />
			</StyledMenu>
		</>
	)
}
