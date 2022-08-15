import { StyledMenu } from './menu.styled'
import { OptionContainer } from './components/optionContainer/optionContainer'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { menuOptions } from './menuOptions'

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
						key={option.id}
						option={option}
						optionChoosen={optionChoosen}
						handleClickOption={handleClickOption}
					/>
				)
			})}
		</StyledMenu>
	)
}
