import TopBar from "./components/TopBar";

import "./App.css";
import { Button, Container, Dropdown, DropdownButton } from "react-bootstrap";
import ShowsList from "./components/ShowsList";
import BottomFooter from "./components/BottomFooter";
import PictureModal from "./components/PictureModal";
import React from "react";

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <TopBar />
      <Container fluid className="px-4">
        <div className="d-flex align-items-center gap-4 mb-4">
          <h2 className="d-inline-block">TV Shows</h2>
          <DropdownButton variant="secondary" className="d-inline-block" id="dropdown-item-button" title="Genres">
            <Dropdown.Item as="button">Comedy</Dropdown.Item>
            <Dropdown.Item as="button">Drama</Dropdown.Item>
            <Dropdown.Item as="button">Thriller</Dropdown.Item>
          </DropdownButton>
        </div>
        <ShowsList title="Trending Now" searchQuery="Harry Potter" />
        <ShowsList title="Watch it Again" searchQuery="Marvel" />
        <ShowsList title="New Releases" searchQuery="Star Wars" />
      </Container>
      <BottomFooter />

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <PictureModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
