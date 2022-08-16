import styled from 'styled-components'

export const StyledFilter = styled.button`
	display: flex;
	height: auto;
	width: 100%;
	margin-bottom: 1em;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: transparent;
	border: none;

	@media (min-width: 992px) {
		width: 100%;
	}
`

export const ImageIcon = styled.img`
	display: flex;
	height: fit-content;
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const DropDown = styled.div`
	position: absolute;
	z-index: 120;
	display: ${({ dropDownIsOpen }) =>
		dropDownIsOpen === true ? 'flex' : 'none'};
	min-height: 100px;
	width: 70%;
	margin-top: 5%;
	padding: 24px;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	background: ${({ theme }) => theme.backgroundColor};
	border: 1px solid rgba(255, 255, 255, 0.5);

	@media (min-width: 992px) {
		width: 240px;
		min-height: auto;
		margin-top: 3%;
	}
`

export const OptionContainer = styled.button`
	display: flex;
	height: auto;
	width: 100%;
	padding: 8px 0 8px 0;
	flex-direction: row;
	justify-content: space-between;
	color: ${({ theme }) => theme.secondaryColor};
	border: none;
	background: ${({ theme }) => theme.backgroundColor};
`

export const Option = styled.h3`
	font-family: 'Regular';
	font-style: normal;
	font-weight: ${({ option, dropDownOptionChoosen }) =>
		option.id === dropDownOptionChoosen.id ? '700' : '400'};
	font-size: 16px;
	line-height: 16px;
	letter-spacing: 4px;
`

export const Checked = styled.img`
	display: ${({ option, dropDownOptionChoosen }) =>
		option.id === dropDownOptionChoosen.id ? 'flex' : 'none'};
	width: fit-content;
`

export const Diamond = styled.div`
	position: absolute;
	top: -6px;
	right: 36px;
	display: none;
	height: 12px;
	width: 12px;
	background-color: ${({ theme }) => theme.backgroundColor};
	transform: rotate(45deg);

	@media (min-width: 992px) {
		display: flex;
	}
`
