import React from "react";
import styled from "styled-components";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const FooterSection = styled.div`
  background: #1c2337;
  color: #fff;
  h3 {
    font-size: 0px;
  }
  p{
      font-weight: 300;
      padding-top: 10px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      cursor: pointer;
  }
  svg{
    font-size: 20px;
    margin: 2px 6px;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="container-fluid">
        <div className="row justify-content-md-between p-5">
          <div className="col-6 col-md-3 col-lg-2 p-5">
            <h4>VILLA SAC</h4>
            <AiFillFacebook className="footer_icon" />
            <AiFillInstagram className="footer_icon" />
            <AiFillGithub className="footer_icon" />
          </div>
          <div className="col-6 col-md-3 col-lg-2 p-5">
            <h4>SERVICES</h4>
            <p>UI Kit</p>
            <p>Documentation</p>
            <p>Page builder</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 p-5">
            <h4>COMPANY</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="col-6 col-md-3 col-lg-2 p-5">
            <h4>HELP</h4>
            <p>FAQs</p>
            <p>Pricing</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
