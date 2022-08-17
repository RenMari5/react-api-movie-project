export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  popularity: number;
  genre_ids: number;
  // isOnWatchList?: boolean;
  // isFavorited?: boolean;
  //make underscores where necessary
};

export type MovieResults = {
  results: Movie[];
};
