import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header({ dark, setDark }) {
  function darkMode() {
    if (dark === "dark") {
      setDark("light");
    } else {
      setDark("dark");
    }
  }
  return (
    <>
      <div
        className={`w-100 p-3 header ${
          dark === "light" ? "pink" : "darkviolet"
        }`}
      >
        <Row className="d-flex align-items-center flex-row">
          <Col xs={10}>
            <p className="h6">Where in the world?</p>
          </Col>
          <Col xs={2} className="d-flex">
            <FontAwesomeIcon
              icon={faMoon}
              className="h6 me-2 iconDarkMode"
            ></FontAwesomeIcon>
            <p className={`${dark}`} onClick={darkMode}>
              {dark === "light" ? "dark" : "light"} mode
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
}
