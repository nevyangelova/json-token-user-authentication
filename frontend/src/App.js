import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { EnhancedAccountForm } from "./Form";
import img from "./background.png";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <EnhancedAccountForm />
    </StyledApp>
  );
}

export default App;

// Styled components

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 200px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const StyledApp = styled.div`
  text-align: center;
  background: linear-gradient(
      rgba(237, 74, 255, 0.5) 0%,
      rgba(237, 74, 255, 0.5) 19%,
      rgba(0, 128, 128, 0.5) 100%
    ),
    url(${img});
  background-size: contain;
  padding: 4rem;
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

/*
.App-header {
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
*/
