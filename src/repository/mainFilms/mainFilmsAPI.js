export function fetchFilmsData() {
	console.log('.env', process.env.REACT_APP_FILMS_URL_API)
	const dataFilms = fetch(process.env.REACT_APP_FILMS_URL_API)
		.then((res) => res.json())
		.then((data) => data.results)
		.catch((error) => console.log(error))
	return dataFilms
}
