import Hello from './components/Hello';
import Goodbye from './components/Goodbye';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-radius: 10px;
  border: 4px solid black;
  margin: 20px;
  background-color: rgba(233, 233, 233, 1);
  padding: 20px;
`;
const Button = styled.button`
background-color: #6b8decff;
color: #fff;
padding: 10px;
width: 200px;
height:50px;
border-radius: 10px;
cursor: pointer;
`;
const Message = styled.p`
color: #333;
font-size: 22px;
text-decoration:underline;
`;
const MainBlock= styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
function Home() {
  const [message, setMessage] = useState('Початковий текст!')
  const changeText = () => {
    setMessage(
      message === 'Початковий текст!'
        ? 'Текст було змінено!'
        : 'Початковий текст!'
    );
  }
  return (
    <MainBlock>
      <Container>
        <Hello />
        <Goodbye />
      </Container>
     
      <Button onClick={changeText}>Змінити текст</Button>
      <Message>{message}</Message>
    </MainBlock>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
