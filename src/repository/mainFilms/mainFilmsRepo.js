import { fetchFilmsData } from '../mainFilms/mainFilmsAPI'

//left this in case want a film aleatory at first page popularity filter
function getRandomInt(minN, maxN) {
	let min = Math.ceil(minN)
	let max = Math.floor(maxN)
	return Math.floor(Math.random() * (max - min) + min)
}

export async function getFilmData() {
	let aleatoryFilmsArray = await fetchFilmsData()
	let aleatoryFilm = aleatoryFilmsArray[getRandomInt(0, 7)]
	return aleatoryFilm
}
