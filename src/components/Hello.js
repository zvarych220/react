import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(222, 186, 194, 1);
`;
const Title = styled.h1`
  font-size: 2.5em;
  color: #ff0000ff;
`;


function Hello() {
 return (
    <Container>
    <Title >Привіт, React!</Title>
    </Container>
 )
}

export default Hello;

