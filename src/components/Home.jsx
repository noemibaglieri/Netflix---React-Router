import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import ShowsList from "./ShowsList";
import TopTitle from "./TopTitle";

const Home = () => {
  return (
    <>
      <TopTitle sectionTitle="Things we think you'll like" />
      <ShowsList title="Trending Now" searchQuery="Harry Potter" />
      <ShowsList title="Watch it Again" searchQuery="Marvel" />
      <ShowsList title="New Releases" searchQuery="Star Wars" />
    </>
  );
};

export default Home;
