/* eslint-disable jsx-a11y/alt-text */
import WavingHand from '../../Assets/icons/waving-hand.png';

import classes from './AboutText.module.scss';

const AboutText = () => (
  <div
    className={`align-self-center
          justify-content-center${classes.AboutText}`}
  >
    <div className="container-fluid">
      <h5 className="about-text text-center align-self-center">
        <img
          src={WavingHand}
          style={{ width: '25px' }}
        />
        Olá, Meu nome é
        {' '}
        <a href="https://www.linkedin.com/in/walter-pereira-245067161/">
          <span><b>Walter</b></span>
        </a
        >
        <br />
        Eu sou
        {' '}
        <b>Programador</b>
        {' '}
        e
        {' '}
        <b>UI Designer</b>
        .
      </h5>
    </div>

    <div className="row container-md container-fluid col-12 d-flex justify-content-center">
      <div className="row WsiShadow mx-md-4 my-4 text-left">
        <div>
          <h5>
            <b>Tenho experiencia com desenvolvimento web backend utilizando:</b>
          </h5>
        </div>
        <br />
        <div>
          <span className="my-2">Python3 + Django</span>
          <br />
          <span>PHP + Codeigniter3</span>
          <br />
          <span>Bancos de dados: Oracle, PostgreSQL e MySQL</span>
        </div>
      </div>
      <div className="row  WsiShadow my-4  text-left">
        <h5><b>Possuo experiência frontend com as ferramentas:</b></h5>
        <div>
          <span className="my-2">VueJS</span>
          <br />
          <span>Bootstrap, W3CSS, MateralizeCSS</span>
          <br />
          <span>Html, CSS, SASS, SCSS</span>
          <br />
          <span>Javascript, es6+, Typescript</span>
        </div>
      </div>

      <div className="row  WsiShadow mx-md-4 my-4 text-left">
        <div>
          <h5 style={{ height: '100%' }}>
            <b>Tenho tambem conhecimentos em:</b>
          </h5>
        </div>
        <div className="col-12 p-0 m-0 float-left ">
          <div>
            <span>Programação seguindo os principios SOLID</span>
            <br />
            <span>Clean Code e Design Patterns</span>
            <br />
            <span>Prototipagem de componentes</span>
            <br />
            <span>Conhecimentos em qualidade de design</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutText;
