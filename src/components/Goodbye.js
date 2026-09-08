import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(192, 186, 222, 1);
`;
const Title = styled.h1`
  font-size: 2.5em;
  color: #3300ffff;
`;


function Goodbye() {
 return (
    <Container>
    <Title >До побачення, React!</Title>
    </Container>
 )
}

export default Goodbye;

