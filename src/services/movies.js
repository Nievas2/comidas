const API_KEY = "d113d5d3"
export const Movies = async ({ search }) => {
  try {
    
     const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search.search}`)
    const json = await response.json()

    const movies = json.Search

    console.log(movies)
    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year:movie.Year,
      director:movie.Director,
      img: movie.Poster
    }));
  } catch (error) {
    throw new Error("Error al buscar las peliculas")
  }
};
