import React, { useState } from "react";
import * as R from "ramda";
import Select from "/components/Select";
import AppBar from "/components/AppBar";
import Content from "/components/Content";
import Poster from "/components/Poster";

const App = () => {
  const [languages, setLanguages] = useState([]);
  const [movies, setMovies] = useState([]);

  React.useEffect(() => {
    fetch("trailers.json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLanguages(data[0]);
        console.log(R.toPairs(data[1])[1]);
        setMovies(R.toPairs(data[1]));
      });
  }, []);

  console.log(movies);

  return (
    <React.Fragment>
      <AppBar>
        <Select options={languages} />
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
