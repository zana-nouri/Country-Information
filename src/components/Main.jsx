import Search from "./Search";
import BoxCountry from "./Boxcountry";
// import { Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-solid-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// https://restcountries.com/#api-endpoints-v3
const API_JSON = "https://restcountries.com/v3.1/all/";
export default function Main({ dark }) {
  const [information, setInformation] = useState(null);
  const [filterData, setFilterData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(API_JSON);
      const data = await res.json();
      setInformation(data);
      setFilterData(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className={`w-100 divMain mt-2 d-flex flex-column ${dark}`}>
        <Search data={information} setFilterData={setFilterData} />
        <div className="parentBoxCountry d-flex flex-wrap justify-content-evenly">
          <BoxCountry filterData={filterData} dark={dark} />;
        </div>
      </div>
    </>
  );
}

// function renderData(data) {
//   const divMain = document.querySelector(".divMain");
//   data.map((data) => {
//     console.log(data);
//     const flag = document.createElement("img");
//     flag.src = data.flag;

//     //append
//     divMain.append(flag);
//     flag.classList.add("w-25");
//   });
// }
