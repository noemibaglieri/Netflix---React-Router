import TopBar from "./components/TopBar";

import "./App.css";
import BottomFooter from "./components/BottomFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid className="px-4">
        <BrowserRouter>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TvShows />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <BottomFooter />
    </>
  );
}

export default App;
