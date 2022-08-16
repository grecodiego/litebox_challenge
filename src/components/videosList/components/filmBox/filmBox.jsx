import {
	FilmTitle,
	StyledFilmBox,
	StarIcon,
	BoxContent,
	PlayCircle,
	BoxSize,
	VoteAndStarContainer,
	TextBottom,
	RowContainerBottom,
	RowContainerTop,
	FilmTitleClicked,
	MiniPlayCircle,
} from './filmBox.styled'
import { useState } from 'react'
import Star from '../../../../assets/images/svg/star.svg'
export const FilmBox = ({ src, title, index, voteAverage, date }) => {
	const [isClicked, setIsClicked] = useState(false)

	function handleClick() {
		setIsClicked(!isClicked)
	}
	return (
		<StyledFilmBox index={index} onClick={handleClick}>
			{isClicked === false ? (
				<BoxContent src={src}>
					<BoxSize />

					<PlayCircle viewBox='0 0 40 40' fill='none'>
						<circle cx='20' cy='20' r='19.5' stroke='white' />
						<path
							fillRule='evenodd'
							clipRule='evenodd'
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
				<BoxContent src={src} isClicked={isClicked}>
					<RowContainerTop>
						<MiniPlayCircle
							height={24}
							width={24}
							viewBox='0 0 40 40'
							fill='none'
						>
							<circle cx='20' cy='20' r='19.5' stroke='white' />
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M26.6484 20.2701L16 13V27L26.6484 20.2701Z'
								stroke='white'
								fill='black'
							/>
						</MiniPlayCircle>
						<FilmTitleClicked>{title}</FilmTitleClicked>
					</RowContainerTop>
					<RowContainerBottom>
						{voteAverage !== undefined ? (
							<>
								<VoteAndStarContainer>
									<StarIcon src={Star} />
									<TextBottom>{voteAverage}</TextBottom>
								</VoteAndStarContainer>
								<TextBottom>{date.slice(0, 4)}</TextBottom>
							</>
						) : null}
					</RowContainerBottom>
				</BoxContent>
			)}
		</StyledFilmBox>
	)
}
