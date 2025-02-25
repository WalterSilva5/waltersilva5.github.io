/* eslint-disable jsx-a11y/alt-text */
import profile from '../Assets/profile.png';
import AboutText from './About/AboutText';
import classes from './About/AboutText.module.scss'


const About = () => (
  <div className="row col-md-12 mt-5">
    <div className="col-md-3">
      <img className="rounded-circle WsiShadow img-fluid" src={profile} />
    </div>
    <div className={ ` col-md-9 WsiShadowTop WsiShadow ${classes.AboutContainer}`} >
      <AboutText />
    </div>
  </div>
);

export default About;
