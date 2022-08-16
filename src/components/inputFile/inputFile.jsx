/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '../../components/buttons/button'
import { theme } from '../../themes/colors'
import { useDropzone } from 'react-dropzone'
import Clip from '../../assets/images/png/clip.png'
import React, { useCallback, useState, useEffect } from 'react'
import {
	ButtonProgressBar,
	ImageIcon,
	InputFilmName,
	ProgressBar,
	ProgressBarContainer,
	ProgressBarError,
	ProgressBarRail,
	StyledInputFile,
	StyledInputFileContainer,
	Text,
	TextProgressBar,
} from './inputFile.styled'

export function InputFile({ isImageFetched, setIsImageFetched }) {
	const [filmNameInputValue, setFilmNameInputValue] = useState('')
	const [image, setImage] = useState(null)
	const [imageLoaded, setImageLoaded] = useState(false)
	const [imageOnDrop, setImageOnDrop] = useState(false)
	const [percentage, setPercentage] = useState(0)
	const [uploadError, setUploadError] = useState(false)
	const [urlImage, setUrlImage] = useState(null)

	useEffect(() => {
		if (urlImage) {
			const userMovies = JSON.parse(localStorage.getItem('userMovies')) || []
			const newUserMovies = [
				{ imageUrl: urlImage, title: filmNameInputValue },
				...userMovies,
			]
			try {
				localStorage.setItem('userMovies', JSON.stringify(newUserMovies))
			} catch (err) {
				alert(err)
				setUploadError(true)
			}
			setIsImageFetched(true)
		}
	}, [urlImage])

	const onDrop = useCallback((acceptedFiles) => {
		setImage(acceptedFiles[0])
		setImageOnDrop(true)

		//Simulating upload progress to the cloud

		/* const formData = new FormData()
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

			console.log('image', image)
		}
		xhr.open('POST', 'https://httpbin.org/post', true)
		xhr.send(formData)
 */
		setTimeout(() => {
			setPercentage(30)
		}, 100)
		setTimeout(() => {
			setPercentage(50)
		}, 1500)
		setTimeout(() => {
			setPercentage(100)
			setImageLoaded(true)
		}, 2000)
	}, [])

	function handleFetchImage() {
		if (image) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setUrlImage(reader.result)
			}
			reader.readAsDataURL(image)
			console.log('asdas')
		} else {
			alert('error')
		}
	}

	const {
		getInputProps,
		getRootProps,
		isDragAccept,
		isDragActive,
		isDragReject,
	} = useDropzone({
		onDrop,
		accept: {
			'image/jpeg': [],
			'image/png': [],
		},
	})

	return isDragActive ? (
		<p>error</p>
	) : (
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
				id={'filmNameInput'}
				name={'filmNameInput'}
				onChange={(e) => setFilmNameInputValue(e.target.value)}
				placeholder={'TITULO'}
				type={'text'}
			/>

			<Button
				background={theme.secondaryColor}
				disabled={
					imageLoaded === true && filmNameInputValue !== '' ? false : true
				}
				onClick={handleFetchImage}
				text={'SUBIR PELiCULA'}
				textColor={theme.backgroundColor}
			/>
		</StyledInputFileContainer>
	)
}
