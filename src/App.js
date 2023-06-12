import React from "react";
import GlobalStyles from "./Components/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components and pages :
import Home from "./pages/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/footer";
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
      <Footer />
    </div>
  );
}

export default App;
