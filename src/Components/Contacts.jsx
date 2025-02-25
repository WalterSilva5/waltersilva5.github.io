/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
import IconLinkedin from '../Assets/icons/linkedin.png';
import IconGithub from '../Assets/icons/github.png';
import IconEmail from '../Assets/icons/mail.png';
import IconWhatsapp from '../Assets/icons/whatsapp.png';

import classes from './Contacts/Contacts.module.scss';

const ContactContainer = (props) => (
  <div className="WsiShadow mx-3 rounded px-3 py-1 my-3 text-center">
    {props.children}
  </div>
);

const Contacts = () => (
  <div>
    <div className="WsiShadow mt-5">
      <h1>Entre em contato comigo</h1>
      <div className="py-4">
        <a target="_blank" href="https://www.linkedin.com/in/walter-pereira-245067161/">
          <ContactContainer>
            <h4>
              <img src={IconLinkedin} className={`${classes.IconImage}`} />
              LINKEDIN
            </h4>
          </ContactContainer>
        </a>
        <a target="_blank" href="https://github.com/WalterSilva5?tab=repositories">
          <ContactContainer>
            <h4>
              <img src={IconGithub} className={`${classes.IconImage}`} />
              GITHUB
            </h4>
          </ContactContainer>
        </a>
        <a target="_blank" href="mailto:waltersilva123454@gmail.com">
          <ContactContainer>
            <h4>
              <img src={IconEmail} className={`${classes.IconImage}`} />
              EMAIL
            </h4>
          </ContactContainer>
        </a>
        <a target="_blank" href="tel:+5587996195736">
          <ContactContainer>
            <h4>
              <img src={IconWhatsapp} className={`${classes.IconImageWhats}`} />
              WHATSAPP
            </h4>
          </ContactContainer>
        </a>
      </div>
    </div>
  </div>
);

export default Contacts;
