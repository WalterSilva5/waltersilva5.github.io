/* eslint-disable react/prop-types */
import classes from './PortfolioSlider.module.scss';

const PortfolioSliderItem = (props) => (
  <div className={`${classes.PortfolioSliderItem}`}>
    { props.children }
  </div>
);

export default PortfolioSliderItem;
