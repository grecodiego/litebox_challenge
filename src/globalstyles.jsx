import { createGlobalStyle } from 'styled-components'
import Regular from './fonts/BebasNeue-Regular.ttf'
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
	width: auto;
	overflow-x: hidden;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	background-repeat: no-repeat;
	background-color: #242424;
}
@font-face {
	font-family: 'Regular';
	src: local('Bebas Neue Regular'),
		url(${Regular}) format('truetype');
}
@font-face {
	font-family: 'Light'; 
	src: local('Bebas Neue Light'),
		url(${Light}) format('truetype');
}
@media only screen and (min-device-width: 480px) {
}
@media only screen and (min-device-width: 768px) {
}
`
