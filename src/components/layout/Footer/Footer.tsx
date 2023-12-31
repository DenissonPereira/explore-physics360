import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";

import Navfooter from '../../../common/navfooter/Navfooter'
import './Footer.sass'

const Footer = () => {

  const footerSobre = 'O projeto "Explore Physics 360" foi cuidadosamente concebido para proporcionar suporte abrangente aos estudantes de todos os níveis, oferecendo uma experiência imersiva e acessível no aprendizado da física.';

  return (
    <div className='footer'>
      <div className="footer1">
        <h1>Sobre</h1>
        <p>{footerSobre}</p>
        <Navfooter />
      </div>
      <div className="footer2">
        <h1>News</h1>
        <ul>
          <li>Notícia 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Notícia 2: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Notícia 3: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Notícia 4: Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>

      </div>
      <div className="footer3">
        <h1>Siga-nos</h1>
        <div className="redes">
          <div className="insta" title="Instagram"><FaInstagram /></div>
          <div className="link" title="LinkedIn"><AiOutlineLinkedin /></div>
          <div className="git" title="GitHub"><FaGithub /></div>
          <div className="face" title="Facebook"><AiOutlineFacebook /></div>
                </div>
        </div>
    </div>
  )
}

export default Footer