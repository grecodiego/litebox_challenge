import {
	FilmTitle,
	StyledFilmBox,
	StarIcon,
	BoxContent,
	PlayCircle,
	BoxSize,
	VoteAndStarContainer,
	TextBottom,
	BoxContentClicked,
	RowContainerBottom,
	RowContainerTop,
	FilmTitleClicked,
} from './filmBox.styled'
import { useState } from 'react'
import Star from '../../../../assets/images/svg/star.svg'
export const FilmBox = ({ src, title, index, voteAverage, date }) => {
	const [isClicked, setIsClicked] = useState(false)

	function handleClick() {
		setIsClicked(!isClicked)
	}
	return (
		<>
			<StyledFilmBox index={index} onClick={handleClick}>
				{isClicked === false ? (
					<BoxContent src={src}>
						<BoxSize />
						<PlayCircle width='40' height='40' viewBox='0 0 40 40' fill='none'>
							<circle cx='20' cy='20' r='19.5' stroke='white' />
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M26.6484 20.2701L16 13V27L26.6484 20.2701Z'
								stroke='white'
								fill='black'
							/>
						</PlayCircle>
						<BoxSize>
							<FilmTitle>{title}</FilmTitle>
						</BoxSize>
					</BoxContent>
				) : (
					<BoxContentClicked src={src} isClicked={isClicked}>
						<RowContainerTop>
							<PlayCircle
								width='24'
								height='24'
								viewBox='0 0 40 40'
								fill='none'
							>
								<circle cx='20' cy='20' r='19.5' stroke='white' />
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M26.6484 20.2701L16 13V27L26.6484 20.2701Z'
									stroke='white'
									fill='black'
								/>
							</PlayCircle>
							<FilmTitleClicked>{title}</FilmTitleClicked>
						</RowContainerTop>
						<RowContainerBottom>
							<VoteAndStarContainer>
								<StarIcon src={Star} />
								<TextBottom>{voteAverage}</TextBottom>
							</VoteAndStarContainer>
							<TextBottom>{date.slice(0, 4)}</TextBottom>
						</RowContainerBottom>
					</BoxContentClicked>
				)}
			</StyledFilmBox>
		</>
	)
}
