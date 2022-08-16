import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputFile } from '../../components/inputFile/inputFile'
import { Page } from '../../components/page/page'
import {
	StyledAddFilm,
	Title,
	CongratzText,
	Text,
	TextContainer,
} from './addFilm.styled'
import { Button } from '../../components/buttons/button'
import { theme } from '../../themes/colors'

export const AddFilm = () => {
	const navigate = useNavigate()
	const [isImageFetched, setIsImageFetched] = useState(false)

	return (
		<Fragment>
			<Page>
				{isImageFetched === false ? (
					<StyledAddFilm>
						<Title>AGREGAR PELICULA</Title>
						<InputFile setIsImageFetched={setIsImageFetched} />
						<Button border={true} onClick={() => navigate(-1)} text={'SALIR'} />
					</StyledAddFilm>
				) : (
					<StyledAddFilm>
						<TextContainer>
							<CongratzText>¡FELICITACIONES!</CongratzText>
							<Text>LITEFLIX THE MOVIE FUE CORRECTAMENTE SUBIDA.</Text>
						</TextContainer>
						<Button
							background={theme.secondaryColor}
							disabled={!isImageFetched}
							onClick={() => navigate(-1)}
							text={'IR A HOME'}
							textColor={theme.backgroundColor}
						/>
					</StyledAddFilm>
				)}
			</Page>
		</Fragment>
	)
}
