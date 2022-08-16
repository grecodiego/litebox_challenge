import { NavBar } from '../navBar/navBar'
import React, { Fragment } from 'react'

export const Page = ({ children }) => {
	return (
		<Fragment>
			<NavBar />
			<main>{children}</main>
		</Fragment>
	)
}
