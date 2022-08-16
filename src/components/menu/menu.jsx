import { menuOptions } from './menuOptions'
import { OptionContainer } from './components/optionContainer/optionContainer'
import { StyledMenu } from './menu.styled'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export const Menu = ({ isOpen, closeMenu }) => {
	const navigate = useNavigate()
	const [optionChoosen, setOptionChoosen] = useState({
		id: 1,
		title: 'INICIO',
	})

	function handleClickOption(option) {
		setOptionChoosen(option)
		closeMenu()
		navigate(option.path)
	}

	return (
		<StyledMenu isOpen={isOpen}>
			{menuOptions.map((option) => {
				return (
					<OptionContainer
						handleClickOption={handleClickOption}
						key={option.id}
						option={option}
						optionChoosen={optionChoosen}
					/>
				)
			})}
		</StyledMenu>
	)
}
