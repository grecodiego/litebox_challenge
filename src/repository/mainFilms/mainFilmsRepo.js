import { fetchFilmsData } from '../mainFilms/mainFilmsAPI'

function getRandomInt(minN, maxN) {
	let min = Math.ceil(minN)
	let max = Math.floor(maxN)
	return Math.floor(Math.random() * (max - min) + min)
}

export async function getFilmData() {
	let aleatoryFilmsArray = await fetchFilmsData()
	let aleatoryFilm = aleatoryFilmsArray[getRandomInt(0, 6)]
	return aleatoryFilm
}
