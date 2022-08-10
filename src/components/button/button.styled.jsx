import styled from 'styled-components'

export const StyledButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 56px;
	margin: 0 17% 5% 17%;
	color: white;

	background-color: #242424;
	${(props) =>
		props.border === true
			? ' border: 1px solid rgba(255, 255, 255, 0.5);'
			: ''};
`

export const ButtonTitle = styled.h2`
	font-family: 'Light';
	font-size: 18px;
	line-height: 22px;
	letter-spacing: 4px;
	padding-top: 6px;
`

export const ImageIcon = styled.img``
