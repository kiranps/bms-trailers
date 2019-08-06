import React, { useState } from "react";
import * as R from "ramda";
import Select from "/components/Select";
import AppBar from "/components/AppBar";
import Content from "/components/Content";
import Poster from "/components/Poster";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);

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
        {movies.map((x, i) => (
          <Poster key={i} data={x[1]} />
        ))}
      </Content>
    </React.Fragment>
  );
};

export default App;
