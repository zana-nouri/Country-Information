import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function Search({ data, setFilterData }) {
  const continent = ["Asia", "Europe", "Africa", "Oceania", "Americas"];
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  useEffect(() => {
    const newData =
      data &&
      data
        .filter((data) => {
          return (
            data.name.common
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase()) ||
            data.altSpellings[0]
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
          );
        })
        .filter((dataSelect) => {
          return dataSelect.region.includes(selectValue);
        });
    setFilterData(newData);
  }, [searchValue, selectValue]);
  return (
    <>
      <div className="divSearch container w-100 mt-5 d-flex">
        <FontAwesomeIcon
          icon={faSearch}
          className="iconSearch"
        ></FontAwesomeIcon>
        <input
          type="text"
          className="inputSearch w-100"
          value={searchValue}
          placeholder="Search for a country..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {console.log(searchValue)}
        <p style={{ textAlign: "center" }}>{searchValue}</p>

        <select
          className="select"
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="">Filter by Region</option>
          {continent.map((data) => {
            return (
              <option value={data} key={data}>
                {data}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
