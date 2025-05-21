import { Dropdown, DropdownButton } from "react-bootstrap";

const TopTitle = (props) => {
  return (
    <div className="d-flex align-items-center gap-4 mb-4">
      <h2 className="d-inline-block">{props.sectionTitle}</h2>
      <DropdownButton variant="secondary" className="d-inline-block" id="dropdown-item-button" title="Genres">
        <Dropdown.Item as="button">Comedy</Dropdown.Item>
        <Dropdown.Item as="button">Drama</Dropdown.Item>
        <Dropdown.Item as="button">Thriller</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default TopTitle;
