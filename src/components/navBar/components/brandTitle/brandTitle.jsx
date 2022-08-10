import React from 'react'
import styled from 'styled-components'

export const BrandTitle = () => {
	return (
		<TitleContainer>
			<FirstTitlePart>LITE</FirstTitlePart>
			<SecondTitlePart>FLIX</SecondTitlePart>
		</TitleContainer>
	)
}

const TitleContainer = styled.div`
	display: flex;
	padding-top: 5px;
	flex-direction: row;
	color: ${({ theme }) => theme.primaryColor};
	letter-spacing: 4px;
	text-align: center;
	font-size: 28px;
	line-height: 28px;
`
const FirstTitlePart = styled.p`
	font-family: 'Regular';
	font-style: normal;
	font-weight: 700;
`
const SecondTitlePart = styled.p`
	display: flex;
	padding-top: 1.6px;
	text-align: center;
	font-family: 'Light';
	font-style: normal;
	font-weight: 400;
`
