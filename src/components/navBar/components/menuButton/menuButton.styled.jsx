import styled, { css } from 'styled-components'

export const StyledMenu = styled.button`
	display: flex;
	height: 28px;
	width: 28px;
	padding: 6px;
	flex-direction: column;
	background: transparent;
	border: none;
	cursor: pointer;
	justify-content: space-between;
	&:focus {
		outline: none;
	}
`

export const defaultLine = css`
	position: relative;
	height: 1px;
	background: ${({ theme }) => theme.secondaryColor};
	transform-origin: 1px;
	transform: rotate(0);
	transition: all 1s linear;
`

export const TopLine = styled.div`
	height: 1px;
	width: ${(props) => (props.value === true ? ' 24px;' : ' 27px;')};
	${defaultLine};
	:first-child {
		transform: ${({ value }) => (value ? 'rotate(45deg)' : 'rotate(0)')};
	}
`

export const MidLine = styled.div`
	width: 27px;
	${defaultLine};
	:nth-child(2) {
		opacity: ${({ value }) => (value ? '0' : '1')};
		transform: translateX(20px, 0);
	}
`

export const BottomLine = styled.div`
	height: 1px;
	width: ${(props) => (props.value === true ? ' 24px;' : ' 17px;')};
	${defaultLine}
	:nth-child(3) {
		transform: ${({ value }) => (value ? `rotate(-45deg);` : `rotate(0);`)};
	}
`
