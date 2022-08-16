import { StyledSubTitle, Text } from './subTitle.styled'

export const SubTitle = ({ partOne, partTwo, size }) => {
	return (
		<>
			<StyledSubTitle>
				<Text fontFamily={'Light'} size={size}>
					{partOne}
				</Text>
				&nbsp;&nbsp;
				<Text fontFamily={'Regular'} size={size}>
					{partTwo}
				</Text>
			</StyledSubTitle>
		</>
	)
}
