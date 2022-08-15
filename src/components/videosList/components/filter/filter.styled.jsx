import styled from 'styled-components'

export const StyledFilter = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: auto;
	width: 100%;
	background-color: transparent;
	border: none;
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
	display: ${({ dropDownIsOpen }) =>
		dropDownIsOpen === true ? 'flex' : 'none'};
	position: absolute;
	flex-direction: column;
	min-height: 100px;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 5%;
	padding: 24px;
	background: ${({ theme }) => theme.backgroundColor};
	border: 1px solid rgba(255, 255, 255, 0.5);
`

export const OptionContainer = styled.button`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	height: auto;
	padding: 8px 0 8px 0;
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
