import PortfolioSlider from './Portfolio/PortfolioSlider';

const Portfolio = () => {

  return (
    <div className="row col-12 pl-2">
      <div className="WsiShadow mt-5">
        <h1>Alguns de meus projetos:</h1>
        <div>
          <PortfolioSlider />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
