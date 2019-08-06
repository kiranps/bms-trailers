import React, { useState } from "react";
import Select from "./Select";

const App = () => {
  const [languages, setLanguages] = useState([]);

  React.useEffect(() => {
    fetch("trailers.json")
      .then(response => response.json())
      .then(data => setLanguages(data[0]));
  }, []);

  return <Select options={languages} />;
};

export default App;
