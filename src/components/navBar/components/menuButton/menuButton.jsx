import { StyledMenu, TopLine, MidLine, BottomLine } from './menuButton.styled'

export const MenuButton = ({ isOpen, closeMenu }) => {
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
