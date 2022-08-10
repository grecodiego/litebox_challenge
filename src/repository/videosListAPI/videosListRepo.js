import { fetchFilmsData } from './videosListAPI'

function getRandomInt(minN, maxN) {
	let min = Math.ceil(minN)
	let max = Math.floor(maxN)
	return Math.floor(Math.random() * (max - min) + min)
}

export async function getAleatoryPopularFilms() {
	let aleatoryFilmsArray = await fetchFilmsData({
		page: getRandomInt(0, 500),
	})
	return aleatoryFilmsArray
}
