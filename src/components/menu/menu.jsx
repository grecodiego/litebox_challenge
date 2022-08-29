import { menuOptions } from './menuOptions'
import { OptionContainer } from './components/optionContainer/optionContainer'
import { StyledMenu } from './menu.styled'
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export const Menu = ({ closeMenu, isOpen }) => {
	const location = useLocation()
	const navigate = useNavigate()
	const [optionChoosen, setOptionChoosen] = useState('/')

	useEffect(() => {
		setOptionChoosen(location.pathname)
	}, [location])

	function handleClickOption(option) {
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
