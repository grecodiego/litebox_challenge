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
	overflow-y: scroll;
	background-repeat: no-repeat;
	background-color: ${({ theme }) => theme.backgroundColor};
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
	::-webkit-scrollbar {
    display: none;}
}
@media only screen and (min-device-width: 768px) {
}

`
