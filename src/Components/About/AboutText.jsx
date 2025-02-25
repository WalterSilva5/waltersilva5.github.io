import WavingHand from '../../Assets/icons/waving-hand.png';
import classes from './AboutText.module.scss';

const AboutText = () => (
  <section className={`${classes.AboutText} d-flex flex-column align-items-center justify-content-center text-center`}>
    <div className="container-fluid">
      <h5 className="about-text">
        <img src={WavingHand} alt="Waving Hand" style={{ width: '25px', marginRight: '5px' }} />
        Olá, Meu nome é
        {' '}
        <a href="https://www.linkedin.com/in/walter-pereira-245067161/" target="_blank" rel="noopener noreferrer">
          <span><b>Walter</b></span>
        </a>
        <br />
        Eu sou <b>Desenvolvedor de Sistemas</b>
      </h5>
    </div>

    <div className="container-md container-fluid d-flex flex-wrap justify-content-center">
      <div className="card WsiShadow mx-md-4 my-4 p-4 text-left">
        <h5><b>Tenho experiência com desenvolvimento web backend utilizando diversas ferramentas e linguagens:</b></h5>
        <ul>
          <li>NodeJS/TypeScript (Express, NestJS, Electron)</li>
          <li>Python (Django, FastAPI, Flask)</li>
          <li>PHP (Laravel, CodeIgniter)</li>
          <li>Bancos de dados: Oracle, PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, OpenSearch</li>
          <li>ORMs: Sequelize, TypeORM, Mongoose, SQLAlchemy</li>
          <li>Cache: Redis, Memcached</li>
          <li>Message Broker: RabbitMQ, Apache Kafka</li>
          <li>Swagger, OpenAPI, Postman</li>
          <li>Autenticação e autorização: JWT, OAuth2, Keycloak</li>
          <li>WebSockets, WebRTC</li>
          <li>Web Scraping</li>
          <li>Integração com APIs de terceiros</li>
          <li>Desenvolvimento de sistemas de alta disponibilidade e escalabilidade</li>
          <li>Desenvolvimento de sistemas de monitoramento e log</li>
          <li>Docker, Kubernetes, Git, Gitflow</li>
          <li>Testes unitários e de integração</li>
          <li>Desenvolvimento de API Restful e GraphQL</li>
          <li>Desenvolvimento de microserviços</li>
          <li>Aplicações WebSockets e em tempo real</li>
          <li>Ferramentas Cloud (AWS, Oracle OCI)</li>
          <li>Arquiteturas Clean e padrões de projeto</li>
          <li>CI/CD</li>
        </ul>
      </div>
      
      <div className="card WsiShadow mx-md-4 my-4 p-4 text-left">
        <h5><b>Possuo experiência frontend com as ferramentas:</b></h5>
        <ul>
          <li>ReactJS, VueJS, Angular</li>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>HTML, CSS, SASS, SCSS</li>
          <li>Bootstrap, W3CSS, MaterializeCSS, MaterialUI</li>
        </ul>
      </div>
      
      <div className="card WsiShadow mx-md-4 my-4 p-4 text-left">
        <h5><b>Tenho também conhecimentos e experiência em:</b></h5>
        <ul>
          <li>Programação seguindo os princípios SOLID</li>
          <li>Clean Code e Design Patterns</li>
          <li>Prototipagem de componentes</li>
          <li>Qualidade de design</li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutText;
