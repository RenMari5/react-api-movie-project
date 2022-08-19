export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  popularity: number; // is this the same as rating?
  genre_ids: number; // I think this may be an array !!
};

export type MovieResults = {
  results: Movie[];
};
