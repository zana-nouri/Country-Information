import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
export default function Details({ dark }) {
  const [information, setInformation] = useState(null); // or {}
  const { name } = useParams();
  const api_Name = `https://restcountries.com/v3.1/name/${name
    .split("-")
    .join(" ")}?fullText=true`;

  //fetch api
  useEffect(() => {
    fetch(api_Name)
      .then((res) => res.json())
      .then((data) => {
        setInformation(data);
      });
  }, []);
  //
  // console.log(information);
  return (
    <>
      {information && (
        <div className={`d-flex flex-column container parentDetails ${dark}`}>
          <Link to={"/"}>
            <Button className="bg-light text-dark ps-4 pe-4 border-0 buttonBack mt-4">
              <FontAwesomeIcon icon={faLeftLong} />
              <span className="ps-2">Back</span>
            </Button>
          </Link>
          <Row>
            <Col>
              <img
                src={information[0].flags.png}
                alt=""
                className="imgCountry"
              />
            </Col>
            <Col>
              <Row>
                <h2 className="mb-5 mt-3">{information[0].name.common}</h2>
                <Col>
                  <span> Native Name :{information[0].name.common}</span>
                  <br />
                  <span>population: {information[0].population}</span>
                  <br />
                  <span>region: {information[0].region}</span>
                  <br />
                  <span>subregion: {information[0].subregion}</span>
                  <br />
                  <span>capital: {information[0].capital[0]}</span>
                </Col>
                <Col>
                  <span>top Level Domain: {information[0].tld[0]}</span>
                  <br />

                  <span>currencies: </span>
                  {Object.values(information[0].currencies).map(
                    (data, index) => {
                      return <span key={index}>{data.name}</span>;
                    }
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
