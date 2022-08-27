import { fetchFilmsData } from './videosListAPI'

export async function getPopularFilms () {
  const popularFilms = await fetchFilmsData({
    page: 1
  })
  return popularFilms
}

// use this for get random movies

/* function getRandomInt(minN, maxN) {
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
 */
