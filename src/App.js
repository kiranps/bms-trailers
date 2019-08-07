import React, { useState } from "react";
import * as R from "ramda";
import Select from "/components/Select";
import AppBar from "/components/AppBar";
import Content from "/components/Content";
import Poster from "/components/Poster/";
import VideoPlayer from "/components/VideoPlayer";
import useWidth from "/lib/useWidth";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedRow, setRow] = useState(null);
  const width = useWidth();

  React.useEffect(() => {
    fetch("trailers.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const movies = R.toPairs(data[1]);
        const genre = R.uniq(
          R.flatten(
            movies.map(x =>
              x[1].EventGenre.split("|").map(x => x.toLowerCase())
            )
          )
        );
        setGenre(genre);
        setLanguages(data[0]);
        setMovies(movies);
      });
  }, []);

  let handleSelectMovie = i => {
    const columns = Math.floor(width / 180);
    const row = Math.floor(i / columns);
    console.log(row);
    setRow(row);
  };

  const columns = Math.floor(width / 180);

  return (
    <React.Fragment>
      <AppBar>
        <AppBar.Left />
        <AppBar.Right>
          <Select options={genre} />
          <Select options={languages} />
        </AppBar.Right>
      </AppBar>
      <Content>
        {movies.map((x, i) =>
          i / columns === selectedRow ? (
            <React.Fragment key={i}>
              <VideoPlayer />
              <Poster data={x[1]} onClick={_ => handleSelectMovie(i)} />
            </React.Fragment>
          ) : (
            <Poster key={i} data={x[1]} onClick={_ => handleSelectMovie(i)} />
          )
        )}
      </Content>
    </React.Fragment>
  );
};

export default App;
