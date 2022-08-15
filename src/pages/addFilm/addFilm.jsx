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
import { PrimaryButton } from '../../components/buttons/primaryButton'
import { SecondaryButton } from '../../components/buttons/secondaryButton'

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
						<PrimaryButton
							text={'SALIR'}
							onClick={() => navigate(-1)}
							border={true}
						/>
					</StyledAddFilm>
				) : (
					<StyledAddFilm>
						<TextContainer>
							<CongratzText>¡FELICITACIONES!</CongratzText>
							<Text>LITEFLIX THE MOVIE FUE CORRECTAMENTE SUBIDA.</Text>
						</TextContainer>
						<SecondaryButton
							text={'IR A HOME'}
							enable={true}
							onClick={() => navigate(-1)}
						/>
					</StyledAddFilm>
				)}
			</Page>
		</Fragment>
	)
}
