import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggle, setToggle] = useState(0);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="service__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
            Web <br /> Developer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "service__modal active-modal" : "service__modal"
            }
          >
            <div className="service__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times service__modal-close"
              ></i>

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">
                Service with more than 1 year of experience. Providing quality
                work to clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i
              className="uil uil-arrow-right services__button-icon"
            ></i>
          </span>

          <div
            className={
              toggle === 2 ? "service__modal active-modal" : "service__modal"
            }
          >
            <div className="service__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times service__modal-close"
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
              I offer design of web interfaces and mobile applications, design made in figma, adobe xd and sketch.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="service__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i
              
              className="uil uil-arrow-right services__button-icon"
            ></i>
          </span>

          <div className={toggle === 3 ? "service__modal active-modal" : "service__modal"}>
            <div className="service__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times service__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
              I make designs at the client's request, banner design, posters, digital designs among others.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">Web page development.</p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal_icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
