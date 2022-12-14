export async function fetchFilmsData({ page }) {
	const arrayDataFilms = await fetch(
		process.env.REACT_APP_FILMS_URL_API + `&page=${page}`
	)
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
