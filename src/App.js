import React from "react";
import GlobalStyles from "./Components/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components and pages :
import Home from "./pages/Home";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="game/:id" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
