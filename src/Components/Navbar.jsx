import style from "./Header.module.css";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className={style.hamburgermenu}
          toggle={false}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            style={{ fill: "white" }}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.linkList}>
          <Dropdown.Item href="#HowItWorks" className={style.link}>
            How it works
          </Dropdown.Item>
          <Dropdown.Item href="#Features" className={style.link}>
            Features
          </Dropdown.Item>
          <Dropdown.Item href="#JoinNow" className={style.link}>
            Join Now
          </Dropdown.Item>
          <Dropdown.Item href="#Aboutus" className={style.link}>
            About us
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Navbar;
