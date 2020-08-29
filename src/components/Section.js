import React from "react";
import styled from 'styled-components';


const Link = styled.a`
  background-color: #335eea;
    border-color: #335eea;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
    text-decoration: none;
    color: #000;
    background: #fff;
    border: 1px solid black;
    transition : 0.2s ease;
  }
`;



const Section = ({ webformatURL, tags, type }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-3 mt-2">
      <div className="card">
        <img
          src={webformatURL}
          style={{ height: "200px", width: "250px" }}
          alt={type}
          className="img-fluid"
        />
        <p className="pt-3 text-center text-muted">{tags}</p>
        <Link className="text-center py-3 px-4">
            Buy Now
          </Link>
      </div>
    </div>
  );
};

export default Section;
