import { StyledMenu } from './menu.styled'
import { OptionContainer } from './components/optionContainer/optionContainer'
import React, { useState } from 'react'

export const Menu = ({ menuOpen, handleMenuButton }) => {
	const [optionChoosen, setOptionChoosen] = useState({
		id: 1,
		title: 'INICIO',
	})
	const menuOptions = [
		{ id: 1, title: 'INICIO', handle: () => {}, path: '' },
		{ id: 2, title: 'SERIES', handle: () => {}, path: '' },
		{ id: 3, title: 'PELICULAS', handle: () => {}, path: '' },
		{ id: 4, title: 'AGREGADAS RECIENTEMENTE', handle: () => {}, path: '' },
		{ id: 5, title: 'POPULARES', handle: () => {}, path: '' },
		{ id: 6, title: 'MIS PELICULAS', handle: () => {}, path: '' },
		{ id: 7, title: 'MI LISTA', handle: () => {}, path: '' },
		{ id: 8, title: '+ AGREGAR PELICULA', handle: () => {}, path: '/add-film' },
		{ id: 9, title: 'CERRAR SESION', handle: () => {}, path: '' },
	]

	function handleClickOption(option) {
		setOptionChoosen(option)
		handleMenuButton()
	}
	return (
		<StyledMenu menuOpen={menuOpen}>
			{menuOptions.map((option) => {
				return (
					<OptionContainer
						option={option}
						optionChoosen={optionChoosen}
						handleClickOption={handleClickOption}
					/>
				)
			})}
		</StyledMenu>
	)
}
