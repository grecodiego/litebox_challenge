import React, { Fragment } from 'react'
import { NavBar } from '../navBar/navBar'

export const Page = ({ children }) => {
	return (
		<Fragment>
			<NavBar />
			<main>{children}</main>
		</Fragment>
	)
}
