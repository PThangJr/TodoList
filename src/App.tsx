import * as React from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import GlobalStyled, { Main, Wrapper } from "./GlobalStyled";
import theme from "./GlobalStyled/theme";
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Wrapper>
        <Main>
          <Header />
          <TodoList />
          <Footer />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
