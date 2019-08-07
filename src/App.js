import React, { useState } from "react";
import * as R from "ramda";
import Select from "/components/Select";
import AppBar from "/components/AppBar";
import Poster from "/components/Poster/";
import VideoPlayer from "/components/VideoPlayer";
import useWidth from "/lib/useWidth";
import Movies from "./components/Movies";
import Filters from "./components/Filters";
import Tag from "./components/Tag";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedTrailer, setTrailer] = useState(-1);
  const [filters, setFilters] = useState({
    genre: [],
    languages: []
  });

  const width = useWidth();

  React.useEffect(() => {
    fetch("trailers.json")
      .then(response => response.json())
      .then(data => {
        const movies = R.toPairs(data[1])
          .map(x => x[1])
          .map(x => ({
            ...x,
            EventGenre: x.EventGenre.split("|").map(x => x.toLowerCase())
          }));

        const genre = R.uniq(R.flatten(movies.map(x => x.EventGenre)));

        setGenre(genre);
        setLanguages(data[0].map(x => x.toLowerCase()));
        setMovies(movies);
      });
  }, []);

  const handleSelectMovie = i => {
    setTrailer(i);
  };

  const handleChangeGenre = values => {
    setFilters({ ...filters, genre: values });
  };

  const handleChangeLanguages = values => {
    setFilters({ ...filters, languages: values });
  };

  const columns = Math.floor(width / 192);
  const selectedRow = Math.floor(selectedTrailer / columns);
  const filteredMovies = movies
    .filter(x =>
      filters.genre.length > 0
        ? R.intersection(x.EventGenre, filters.genre).length > 0
        : true
    )
    .filter(x =>
      filters.languages.length > 0
        ? filters.languages.includes(x.EventLanguage.toLowerCase())
        : true
    );

  console.log(movies);

  return (
    <React.Fragment>
      <AppBar>
        <AppBar.Left />
        <AppBar.Right>
          <Select
            options={genre}
            placeholder="Genre"
            onChange={handleChangeGenre}
          />
          <Select
            options={languages}
            placeholder="Languages"
            onChange={handleChangeLanguages}
          />
        </AppBar.Right>
      </AppBar>
      <Filters>
        {filters.genre.map((x, i) => (
          <Tag key={i} value={x} />
        ))}
        {filters.languages.map((x, i) => (
          <Tag key={i} value={x} />
        ))}
      </Filters>
      <Movies>
        {filteredMovies.map((x, i) =>
          i / columns === selectedRow ? (
            <React.Fragment key={i}>
              <VideoPlayer data={filteredMovies[selectedTrailer]} />
              <Poster key={i} data={x} onClick={_ => handleSelectMovie(i)} />
            </React.Fragment>
          ) : (
            <Poster key={i} data={x} onClick={_ => handleSelectMovie(i)} />
          )
        )}
      </Movies>
    </React.Fragment>
  );
};

export default App;
