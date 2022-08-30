import { NavBar } from '../navBar/navBar'
import React from 'react'
import { StyledPage } from './page.styled'

export const Page = ({ children }) => {
	return (
		<StyledPage>
			<NavBar />
			<main>{children}</main>
		</StyledPage>
	)
}
