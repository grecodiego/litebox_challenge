import {
	StyledSubTitle,
	FirstPartOriginTitle,
	SecondPartOriginTitle,
} from './subTitle.styled'

export const SubTitle = ({ partOne, partTwo, size }) => {
	return (
		<>
			<StyledSubTitle>
				<FirstPartOriginTitle size={size}>{partOne}</FirstPartOriginTitle>
				&nbsp;&nbsp;
				<SecondPartOriginTitle size={size}>{partTwo}</SecondPartOriginTitle>
			</StyledSubTitle>
		</>
	)
}
