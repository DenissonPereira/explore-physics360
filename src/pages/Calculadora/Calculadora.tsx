import Cal from "../../calculadoras/Cal/Cal"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { useState } from "react";

import './Calculadora.sass'
import CalDark from "../../calculadoras/CalDark/CalDark";
import Footer from "../../components/layout/Footer/Footer";
import Footer2 from "../../components/layout/Footer2/Footer2";


const Calculadora = () => {


  const [tema, setTema] = useState('Mudar para tema escuro')

  const [sol, setSol] = useState(true);
  const [brasil] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const mudarIdioma = () => {

  };

  const mudarTema = () => {
    if (backgroundColor === '#ffffff') {
      document.body.style.backgroundColor = '#151320';
      setBackgroundColor('#151320');
      setSol(false);
      setTema('Mudar para tema claro');
    } else {
      setBackgroundColor('#ffffff');
      setSol(true);
      setTema('Mudar para tema escuro');
      document.body.style.backgroundColor = '#ffffff';
    }

  };

  return (
    <div  className="principal_calculadora">
        <div className="nav_calculadora">
          <NavbarPesquisar />
          <button onClick={mudarIdioma} className="botao_calculadora">
            {brasil ?  <FaFlagUsa /> : <GiBrazilFlag />}
          </button>
          <button onClick={mudarTema} title={tema} className="botao_calculadora">
            {sol ?  <LuMoon /> : <WiMoonAltThirdQuarter />}
          </button>
        </div>
        <div className="calculadora_container">
          {sol ? <Cal /> : <CalDark />}
        </div>
        <div className="footer_calculadora">
          <Footer  brasil={true}/>
        </div>
        <div className="footer2_calculadora">
          <Footer2 />
        </div>
    </div>
  )
}

export default Calculadora