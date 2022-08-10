const filmsUrlAPI =
	'https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20'

export function fetchFilmsData() {
	let dataFilms= fetch(filmsUrlAPI)
		.then((res) => res.json())
		.then((data) => data.results)
		.catch((error) => console.log(error))
	return dataFilms
}
