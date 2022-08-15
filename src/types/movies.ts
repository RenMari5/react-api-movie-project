export type Movie = {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  releaseDate: string;
  popularity: number;
  isOnWatchList?: boolean;
  isFavorited?: boolean;
};
