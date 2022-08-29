import { fetchFilmsData } from '../mainFilms/mainFilmsAPI'

// Use this in case want a film aleatory at first page popularity filter
/* function getRandomInt(minN, maxN) {
	let min = Math.ceil(minN)
	let max = Math.floor(maxN)
	return Math.floor(Math.random() * (max - min) + min)
} */

export async function getFilmData () {
  const aleatoryFilmsArray = await fetchFilmsData()
  const aleatoryFilm = aleatoryFilmsArray[0] // if want the most popular film, just delete 'getRandomInt(0, 7)' and put '0'
  return aleatoryFilm
}

// I think is more fun the app with aleatory background films..
