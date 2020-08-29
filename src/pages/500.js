import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  h4 {
    font-size: 45px;
    padding: 20px 0px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 40px;
  }
  a {
    background-color: #335eea;
    border-color: #335eea;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

const FatalError = () => (
  <Div>
    <h4>Error: 500 Unexpected Error</h4>
    <p>
      
     We're unable to fulfill your request. Rest assured we have been notified and are looking <br />
     into the issue. Please refresh your browser. If the error continues, <br />
     please contact our support
    </p>
    <Link to="/" className="py-3 px-4">
      Go to Home
    </Link>
  </Div>
);

export default FatalError;
