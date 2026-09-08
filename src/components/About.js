import React from 'react';
import styled from "styled-components";
const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(179, 213, 213, 1);
`;
const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
`;
const Text = styled.p`
  font-size: 1.2em;
  color: #666;
`;

function About() {
 return (
    <Container>
    <Title >Про нас</Title>
    <Text>Створення вебсайту на React</Text>
    </Container>
 )
  
}

export default About;

