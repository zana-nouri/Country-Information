import React from "react";
import Main from "../components/Main";
export default function Home({ dark }) {
  return (
    <>
      <main>
        <Main dark={dark} />
      </main>
    </>
  );
}
