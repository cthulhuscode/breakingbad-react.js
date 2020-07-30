import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

// Components
import Quote from "./components/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;
const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #1c7440 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: "Mulish", Arial, Helvetica, sans-serif;
  color: #ffbe4d;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // State
  const [quote, setQuote] = useState({});

  const getApiData = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await api.json();
    setQuote(quote[0]);
  };

  // useEffect
  // Cargar una frase
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={getApiData}>Obtener frase</Button>
    </Container>
  );
}

export default App;
