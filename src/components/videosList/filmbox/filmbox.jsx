import { FilmTitle, StyledFilmBox } from './filmbox.styled'
import { BoxContent, PlayCircle } from './filmbox.styled'
import playCircle from '../../../assets/images/png/playCircle.png'

export const FilmBox = ({ src, id, title }) => {
	return (
		<StyledFilmBox>
			<BoxContent src={src}>
				<PlayCircle src={playCircle} />
				<FilmTitle>{title}</FilmTitle>
			</BoxContent>
		</StyledFilmBox>
	)
}
