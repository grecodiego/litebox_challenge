const filmsUrlAPI =
	'https://api.themoviedb.org/3/discover/movie?api_key=6f26fd536dd6192ec8a57e94141f8b20&sort_by=popularity.desc'

export async function fetchFilmsData({ page }) {
	let arrayDataFilms = await fetch(filmsUrlAPI + `&page=${page}`)
		.then((res) => res.json())
		.then((data) => data.results)
		.catch((error) => console.log(error))
	return arrayDataFilms
}

// to get random movies
/* 
const filmsUrlAPI =
	'https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20'
 */
