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
            width="15"
            height="15"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.linkList}>
          <Dropdown.Item href="#Welcome" className={style.link}>
            Welcome
          </Dropdown.Item>
          <Dropdown.Item href="#HowItWorks" className={style.link}>
            How It Works
          </Dropdown.Item>
          <Dropdown.Item href="#FeaturesHighlights" className={style.link}>
            Features Highlights
          </Dropdown.Item>
          <Dropdown.Item href="#ComingSoon" className={style.link}>
            Coming Soon!
          </Dropdown.Item>
          <Dropdown.Item href="#AboutUs" className={style.link}>
            About Us
          </Dropdown.Item>
          <Dropdown.Item href="#Connect" className={style.link}>
            Connect
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Navbar;

{
  /*const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  <Button onClick={handleShow} className={style.hamburgermenu}>
<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="15"
  height="15"
  viewBox="0 0 50 50"
>
  <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
</svg>
</Button>

<Offcanvas
show={show}
onHide={handleClose}
style={{ width: "300px", height: "100%" }}
>
<Offcanvas.Header closeButton>
  <Offcanvas.Title>Links</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
  <ul className={style.linkList}>
    <li>
      <a href="#Welcome" className={style.link}>
        Welcome
      </a>
    </li>
    <li>
      <a href="#HowItWorks" className={style.link}>
        How It Works
      </a>
    </li>
    <li>
      <a href="#FeaturesHighlights" className={style.link} >
        Features Highlights
      </a>
    </li>
    <li>
      <a href="#ComingSoon" className={style.link}>
        Coming Soon!
      </a>
    </li>
    <li>
      <a href="#AboutUs" className={style.link}>
        About Us
      </a>
    </li>
    <li>
      <a href="#Connect" className={style.link}>
        Connect
      </a>
    </li>
  </ul>
</Offcanvas.Body>
</Offcanvas> */
}
