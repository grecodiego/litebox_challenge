import { FilmTitle, StyledFilmBox } from './filmBox.styled'
import { BoxContent, PlayCircle } from './filmBox.styled'
import playCircle from '../../../../assets/images/png/playCircle.png'

export const FilmBox = ({ src, title, index }) => {
	return (
		<>
			<StyledFilmBox index={index}>
				<BoxContent src={src}>
					<PlayCircle src={playCircle} />
					<FilmTitle>{title}</FilmTitle>
				</BoxContent>
			</StyledFilmBox>
		</>
	)
}
