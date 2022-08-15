import styled, { css } from 'styled-components'

export const StyledMenu = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 28px;
	width: 28px;
	padding: 6px;
	background: transparent;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`
export const defaultLine = css`
	height: 1px;
	background: ${({ theme }) => theme.secondaryColor};
	transition: all 1s linear;
	transform: rotate(0);
	position: relative;
	transform-origin: 1px;
`

export const TopLine = styled.div`
	width: ${(props) => (props.value === true ? ' 24px;' : ' 27px;')};
	height: 1px;
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
	${defaultLine}
	width: ${(props) => (props.value === true ? ' 24px;' : ' 17px;')};
	:nth-child(3) {
		transform: ${({ value }) => (value ? `rotate(-45deg);` : `rotate(0);`)};
	}
`
