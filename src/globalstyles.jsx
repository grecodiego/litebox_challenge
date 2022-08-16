import { createGlobalStyle } from 'styled-components'
import regular from './fonts/BebasNeue-Regular.ttf'
import Light from './fonts/BebasNeue-Light.ttf'

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}

html,
body {
	margin: 0px auto;
	height: auto;
	width: 100%;
	overflow-x: hidden;
	background-repeat: no-repeat;
	background-color: ${({ theme }) => theme.backgroundColor};
	overscroll-behavior: none;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	@media (min-width: 992px) {
		overflow-y: hidden;
	}
}

@font-face {
	font-family: 'Regular';
	src: local('Bebas Neue Regular'),
		url(${regular}) format('truetype');
		font-display: auto; 
}

@font-face {
	font-family: 'Light'; 
	src: local('Bebas Neue Light'),
		url(${Light}) format('truetype');
		font-display: auto; 
}
`
