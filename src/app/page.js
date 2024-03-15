"use client"; // index.js

import React, { useState } from "react";


const IndexPage = () => {
  const [url,seturl] = useState("")
  const [fetchCode,setFetchCode] = useState("")
  const [lintingResults, setLintingResults] = useState("");


  const onchange = (event) => {
    const {value} = event.target
    seturl(value)
    console.log(value);
  }

  const onclick = async () => {
    
    console.log(url);
    const response = await fetch(`${url}
    `, {
      method: "GET",
    });
    const data = await response.text();
    setFetchCode(data)
   
  }


  console.log("gitlog",fetchCode);


  async function lintReactCode() {
    if (!url) {
      alert("Please enter some React code.");
      return;
    }

    const response = await fetch(`${lintingResults}`, {
      method: "GET",
    });
    const data = await response.text();
    console.log("gitlog",data);

    // setLintingResults(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <h1>React Code Linter</h1>
      <p>Enter your React code below:</p>
      <textarea  value={url}
      onChange={onchange}
      id="reactCode"></textarea>
      <button onClick={onclick}>Lint Code</button>
      <div id="lintingResults">
        <h2>Linting Results:</h2>
        <pre>{lintingResults}</pre>
      </div>
    </>
  );
};

export default IndexPage;
