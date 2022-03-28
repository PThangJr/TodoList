import styled, { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
`;
export default GlobalStyled;
export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-wrap: wrap;
    font-size: 1.4rem;
    & p {
      margin: 0;
      margin-top: 5px;
    }
  }
`;
export const Input = styled.input`
  padding: 8px;
  border: 1px solid grey;
  outline: none;
  border-radius: 6px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
  background-image: linear-gradient(
    to right bottom,
    #68e3ee,
    #f575da,
    #8c87ff,
    #d3b0e9
  );
  position: relative;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 10%), -2px -2px 4px rgb(0 0 0 / 10%),
    inset 0 0 2px rgb(0 0 0 / 10%);
`;
export const Main = styled.main`
  border: 3px solid white;
  border-radius: 10px;
  width: 620px;
  height: 100vh;
  padding: 0 30px;
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    width: 95%;
    padding: 0 10px;
    /* margin: 0 20px; */
  }
`;
