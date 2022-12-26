import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const QuoteContainer = styled.div`
  padding: 3em;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 992px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: "Mulish", Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: "Mulish", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {
  return (
    <QuoteContainer>
      <h1>{quote.quote}</h1>
      <p>{quote.author}</p>
    </QuoteContainer>
  );
};

Quote.propTypes = {
  quote: PropTypes.object.isRequired,
};

export default Quote;
