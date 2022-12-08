import * as React from "react";
import Pages from "./pages/Pages";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="background">
        <HashRouter>
          <Pages />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
