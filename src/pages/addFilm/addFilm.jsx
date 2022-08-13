import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { InputFile } from '../../components/inputFile/inputFile'
import { Page } from '../../components/page/page'
import { StyledAddFilm, Title } from './addFilm.styled'
import { PrimaryButton } from '../../components/buttons/primaryButton'

export const AddFilm = () => {
	const navigate = useNavigate()

	return (
		<Fragment>
			<Page>
				<StyledAddFilm>
					<Title>AGREGAR PELICULA</Title>
					<InputFile />
					<PrimaryButton
						text={'SALIR'}
						onClick={() => navigate(-1)}
						border={true}
					/>
				</StyledAddFilm>
			</Page>
		</Fragment>
	)
}
