import React from "react";
import Header from "./Header";
import Main from "./Main";
import { css, Global } from '@emotion/core';

const styles = css`
  body {
    min-height: 100vh;
    background: #f1f1f1;
  }
`

function App() {
  return (
    <>
      <Global styles={styles} />
      {/* <Header /> */}
      <Main />
    </>
  );
}

export default App;
