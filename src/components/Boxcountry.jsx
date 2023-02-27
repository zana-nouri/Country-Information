import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
export default function BoxCountry({ filterData, dark }) {
  return (
    <>
      {filterData &&
        filterData.map((data) => {
          //
          return (
            <>
              <Link
                to={`/country/${data.name.common.split(" ").join("-")}`}
                className="linkBox"
              >
                <Card style={{ width: "15rem" }} className="m-3 text-dark">
                  <div className="image-div">
                    <Card.Img variant="top" src={data.flags.svg} />
                  </div>
                  <Card.Body className={dark}>
                    <Card.Title className={dark}>{data.name.common}</Card.Title>
                    <Card.Text className={dark}>
                      population : {data.population}
                      <br />
                      region : {data.region}
                      <br />
                      capital : {data.capital}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </>
          );
          //
        })}
    </>
  );
}
