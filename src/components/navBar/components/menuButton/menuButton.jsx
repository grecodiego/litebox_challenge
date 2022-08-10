import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export const MenuButton = (props) => {
	const [value, setValue] = useState(false)

	return (
		<StyledMenu value={value} onClick={() => setValue(!value)}>
			<TopLine value={value} />
			<MidLine value={value} />
			<BottomLine value={value} />
		</StyledMenu>
	)
}

const StyledMenu = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 24px;
	width: 24px;
	padding: 6px;
	background: transparent;
	border: none;
	cursor: pointer;

	&:focus {
		outline: none;
	}
`
const defaultLine = css`
	height: 1px;
	background: ${({ theme }) => theme.secondaryColor};
	transition: all 1s linear;
	transform: rotate(0);
	position: relative;
	transform-origin: 1px;
`

const TopLine = styled.div`
	width: ${(props) => (props.value === true ? ' 17px;' : ' 27px;')};
	height: 1px;
	${defaultLine};
	:first-child {
		transform: ${({ value }) => (value ? 'rotate(45deg)' : 'rotate(0)')};
	}
`
const MidLine = styled.div`
	width: 27px;
	${defaultLine};
	:nth-child(2) {
		opacity: ${({ value }) => (value ? '0' : '1')};
		transform: translateX(20px, 0);
	}
`
const BottomLine = styled.div`
	height: 1px;
	${defaultLine}
	width: ${(props) => (props.value === true ? ' 17px;' : ' 17px;')};
	:nth-child(3) {
		transform: ${({ value }) => (value ? `rotate(-45deg);` : `rotate(0);`)};
	}
`
