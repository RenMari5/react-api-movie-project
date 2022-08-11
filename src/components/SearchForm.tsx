//search bar w three option of criteria to search by

import { useState } from "react";
import { Movie } from "../types/movies";

function SearchForm() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  return (
    <div>
      <form></form>
    </div>
  );
}

export default SearchForm;
