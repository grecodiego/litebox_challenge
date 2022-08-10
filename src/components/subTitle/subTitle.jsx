import downArrow from '../../assets/images/png/downArrow.png'
import {
	StyledSubTitle,
	FirstPartOriginTitle,
	SecondPartOriginTitle,
	ImageIcon,
} from './subTitle.styled'

export const SubTitle = ({ partOne, partTwo, size }) => {
	return (
		<>
			<StyledSubTitle>
				<FirstPartOriginTitle size={size}>{partOne}</FirstPartOriginTitle>
				&nbsp;&nbsp;
				<SecondPartOriginTitle size={size}>{partTwo}</SecondPartOriginTitle>
				&nbsp;&nbsp;
				<ImageIcon src={downArrow} />
			</StyledSubTitle>
		</>
	)
}
