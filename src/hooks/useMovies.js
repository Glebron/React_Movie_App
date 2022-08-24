const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [totals, setTotals] = useState(0);
  const [pages, setPages] = useState(0);

  const MAX_LIMIT_PER_PAGE = 100;

  const fetchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ebbeaf22f0da2f470228369aa311a38e&language=en-US&page=${activePage}`
    );
    const movieList = await data.json();
    const minTotals = Math.min(movieList.total_results, MAX_LIMIT_PER_PAGE);

    setMovies(movieList.results);
    setFiltered(movieList.results);
    setTotals(minTotals);
    setPages(minTotals);
    setLoader(false);
  };

  const fetchTopMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ebbeaf22f0da2f470228369aa311a38e&language=en-US&total_results=${5}`
    );
    const topList = await data.json();
    setTopMovies(topList.results);
  };

  useEffect(() => {
    setLoader(true);
    fetchMovies();
    fetchTopMovies();
  }, [activePage]);
};

export default useMovies;
