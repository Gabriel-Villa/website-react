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

const NotFound = () => (
  <Div>
    <h4>Error: 404 Page Not Found </h4>
    <p>
      The page you are looking for might have been removed <br />
      had its name changed or is temporarily unavailable
    </p>
    <Link to="/" className="py-3 px-4">
      Go to Home
    </Link>
  </Div>
);

export default NotFound;
