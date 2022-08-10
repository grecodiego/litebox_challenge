import React, { Fragment } from 'react'
import { NavBar } from '../navBar/navBar'
import { PageContainer } from './components/PageContainer/pageContainer'
import { BackgroundContainer } from '../backgroundContainer/backgroundContainer'

export const Page = ({ filmData }) => {
	return (
		<Fragment>
			<BackgroundContainer filmImage={filmData.backdrop_path} />
			<NavBar />
			<PageContainer filmData={filmData}></PageContainer>
		</Fragment>
	)
}
