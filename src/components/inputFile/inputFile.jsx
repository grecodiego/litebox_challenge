/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect, Fragment } from 'react'
import { useDropzone } from 'react-dropzone'
import Clip from '../../assets/images/png/clip.png'
import { SecondaryButton } from '../../components/buttons/secondaryButton'
import {
	StyledInputFile,
	Text,
	ImageIcon,
	InputFilmName,
	ProgressBarContainer,
	ProgressBarRail,
	ProgressBar,
	TextProgressBar,
	ButtonProgressBar,
	StyledInputFileContainer,
	ProgressBarError,
} from './inputFile.styled'

export function InputFile({ setIsImageFetched }) {
	const [image, setImage] = useState(null)
	const [imageOnDrop, setImageOnDrop] = useState(false)
	const [urlImage, setUrlImage] = useState(null)
	const [filmNameInputValue, setFilmNameInputValue] = useState('')
	const [percentage, setPercentage] = useState(0)
	const [uploadError, setUploadError] = useState(false)
	const [imageLoaded, setImageLoaded] = useState(false)

	useEffect(() => {
		if (urlImage !== null) {
			let localStorageData = []
			if (localStorage.getItem('userMovies') !== null) {
				localStorageData = JSON.parse(localStorage.getItem('userMovies'))
			}
			localStorageData.push({ imageUrl: urlImage, title: filmNameInputValue })
			let localStorageDataJSON = JSON.stringify(localStorageData)
			localStorage.setItem('userMovies', localStorageDataJSON)
		}
	}, [urlImage])

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0])
		setImageOnDrop(true)

		const formData = new FormData()
		for (const file of acceptedFiles) formData.append('file', file)

		const xhr = new XMLHttpRequest()
		xhr.upload.onprogress = (event) => {
			const percentage = parseInt((event.loaded / event.total) * 100)
			setPercentage(percentage)
		}
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== 4) return
			if (xhr.status !== 200) {
				setUploadError(true)
			}
			setImageLoaded(true)
		}
		xhr.open('POST', 'https://httpbin.org/post', true)
		xhr.send(formData)
	}, [])

	function handleFetchImage() {
		if (image) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setUrlImage(reader.result)
			}
			reader.readAsDataURL(image)
		} else {
			alert('error')
		}
		setIsImageFetched(true)
	}

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
		<StyledInputFileContainer>
			{imageOnDrop === false ? (
				<StyledInputFile {...getRootProps()}>
					<input {...getInputProps()} />
					<ImageIcon src={Clip} />
					<Text>AGREGÁ UN ARCHIVO</Text>
					{isDragAccept && <p>All files will be accepted</p>}
					{isDragReject && <p>Some files will be rejected</p>}
				</StyledInputFile>
			) : (
				<ProgressBarContainer>
					<TextProgressBar>
						{uploadError === false
							? percentage === 100
								? '100% cargado'
								: `CARGANDO ${percentage}%`
							: '¡ERROR! no se pudo cargar la película'}
					</TextProgressBar>
					<ProgressBarRail>
						{uploadError === false ? (
							percentage === 100 ? (
								<ProgressBar percentage={100} />
							) : (
								<ProgressBar percentage={percentage} />
							)
						) : (
							<ProgressBarError />
						)}
					</ProgressBarRail>
					<ButtonProgressBar imageLoaded={imageLoaded}>
						{uploadError === false
							? percentage === 100
								? '¡LISTO!'
								: `CANCELAR`
							: 'REINTENTAR'}
					</ButtonProgressBar>
				</ProgressBarContainer>
			)}
			<InputFilmName
				border={true}
				placeholder={'TITULO'}
				type={'text'}
				id={'filmNameInput'}
				name={'filmNameInput'}
				onChange={(e) => setFilmNameInputValue(e.target.value)}
			/>

			<SecondaryButton
				text={'SUBIR PELiCULA'}
				enable={imageLoaded && filmNameInputValue.length > 0 ? true : false}
				onClick={
					imageLoaded === true && filmNameInputValue !== ''
						? handleFetchImage
						: null
				}
			/>
		</StyledInputFileContainer>
	) : (
		<p>error</p>
	)
}
