import "./App.css";
import { React, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [path, setPath] = useState();

  console.log(path);
  return (
    <>
      {/*add cart here*/}
      <Router>
        <AppRoutes setPath={setPath} />
      </Router>
    </>
  );
}

export default App;
