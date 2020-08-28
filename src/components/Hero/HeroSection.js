import React from "react";
import { Link } from 'react-router-dom';
import "../css/HeroSection.css";


const HeroSection = ({
  bgDark,
  row,
  textTop,
  textTitle,
  description,
  textBtn,
  img,
  alt
}) => {
  return (
    <>
      <div className={bgDark ? 'hero_container darkBg' : 'hero_container'}>
         <div className="container">
         <div className="hero_row row" style={{display: 'flex', flexDirection: row ? 'row' : 'row-reverse'}}>
              <div className="col-md-6 col-sm-12">
                <div className="hero_text-wrapper">
                  <div className="hero_text_top">{textTop}</div>
                  <h1 className="hero_text_title">{textTitle}</h1>
                  <p className={`${bgDark} ? 'text-danger' : 'text-dark' hero_text_description`}>{description}</p>
                  <Link to="/" className="hero_btn py-3 px-5">
                    {textBtn}
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="hero_img">
                <img src={img} alt={alt} className="img-fluid"/>
                </div>
              </div>
          </div>
         </div>
      </div>
    </>
  );
};
export default HeroSection;
