import React from "react";
import { createGlobalStyle } from "styled-components";
export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, sans-serif;
  }
  html, body {
    height: 100%;
  }
  

`;
