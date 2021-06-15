/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import Slider from 'react-slick';
import classes from './PortfolioSlider.module.scss';
import PortfolioSliderItem from './PortfolioSliderItem';

import image1 from '../../Assets/projects/project-0.png';
import image2 from '../../Assets/projects/project-1.png';
import image3 from '../../Assets/projects/project-2.png';
import image4 from '../../Assets/projects/project-3.png';
import image5 from '../../Assets/projects/project-4.png';
import image6 from '../../Assets/projects/project-5.png';

export default class PortfolioSlider extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.slider.slickPlay();
  }

  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      className: 'center',
      centerPadding: '30px',
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            centerPadding: '50px',
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider
          ref={(slider) => (this.slider = slider)}
          {...settings}
          className={` col-12 container-fluid${classes.PortfolioSlider}`}
        >
          <a target="_blank" href="https://waltersilva5.github.io/wsi-youtube-downloader-demo/" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image1} />
            </PortfolioSliderItem>
          </a>

          <a target="_blank" href="https://carvalhosfit.herokuapp.com/" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image2} />
            </PortfolioSliderItem>
          </a>
          <a target="_blank" href="http://frinex.com.br/" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image3} />
            </PortfolioSliderItem>
          </a>
          <a target="_blank" href="https://github.com/WalterSilva5/gestao-de-lan-house" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image4} />
            </PortfolioSliderItem>
          </a>
          <a target="_blank" href="https://github.com/WalterSilva5/teste-esoft" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image5} />
            </PortfolioSliderItem>
          </a>
          <a target="_blank" href="https://waltersilva5.github.io/wsi-landing-page-green/dist/" rel="noreferrer">
            <PortfolioSliderItem>
              <img className="img-fluid d-flex align-middle" src={image6} />
            </PortfolioSliderItem>
          </a>

        </Slider>
      </div>
    );
  }
}
