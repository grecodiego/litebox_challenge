import { StyledMenu, TopLine, MidLine, BottomLine } from './menuButton.styled'

export const MenuButton = ({ menuOpen, handleMenuButton }) => {
	return (
		<>
			<StyledMenu value={menuOpen} onClick={handleMenuButton}>
				<TopLine value={menuOpen} />
				<MidLine value={menuOpen} />
				<BottomLine value={menuOpen} />
			</StyledMenu>
		</>
	)
}
