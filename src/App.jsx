import * as React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="background">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
