import React, { Component } from "react";
import styled from "styled-components";
import BitcoinContainer from "./BitcoinContainer";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <BitcoinContainer />
      </Wrapper>
    );
  }
}

export default App;
