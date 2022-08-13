import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import Clip from '../../assets/images/png/clip.png'
import { SecundaryButton } from '../../components/buttons/secundaryButton'
import {
	StyledInputFile,
	Text,
	ImageIcon,
	ButtonsContainer,
	InputFilmName,
} from './inputFile.styled'

export function InputFile() {
	const [image, setImage] = useState(null)
	const [imageOnDrop, setImageOnDrop] = useState(false)
	const [urlImage, setUrlImage] = useState(null)
	const [filmNameInputValue, setFilmNameInputValue] = useState('')

	let localStorageData = []

	function handleUploadImage() {
		if (image) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setUrlImage(reader.result)
			}
			reader.readAsDataURL(image)
		} else {
			console.error('error')
		}
	}

	useEffect(() => {
		if (urlImage !== null) {
			localStorageData = JSON.parse(localStorage.getItem('userMovies'))
			localStorageData.push({ imageUrl: urlImage, title: filmNameInputValue })
			let localStorageDataJSON = JSON.stringify(localStorageData)
			localStorage.setItem('userMovies', localStorageDataJSON)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlImage])

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0])
		setImageOnDrop(true)
	}, [])

	const {
		getRootProps,
		getInputProps,
		isDragAccept,
		isDragReject,
		isDragActive,
	} = useDropzone({
		onDrop,
		accept: {
			'image/jpeg': [],
			'image/png': [],
		},
	})

	return isDragActive === false ? (
		<section>
			<StyledInputFile {...getRootProps()}>
				<input {...getInputProps()} />
				<ImageIcon src={Clip} />
				<Text>AGREGÁ UN ARCHIVO</Text>
			</StyledInputFile>
			{isDragAccept && <p>All files will be accepted</p>}
			{isDragReject && <p>Some files will be rejected</p>}
			<InputFilmName
				border={true}
				placeholder={'TITULO'}
				type={'text'}
				id={'filmNameInput'}
				name={'filmNameInput'}
				onChange={(e) => setFilmNameInputValue(e.target.value)}
			/>
			<ButtonsContainer>
				<SecundaryButton
					text={'SUBIR PELiCULA'}
					backgroundColor={true}
					imageOnDrop={imageOnDrop}
					filmNameInputValue={filmNameInputValue}
					onClick={imageOnDrop === true ? handleUploadImage : null}
				/>
			</ButtonsContainer>
		</section>
	) : (
		<div></div>
	)
}
