import Dois from "../../calculadoras/Matrizes/Dois/Dois"
import Quatro from "../../calculadoras/Matrizes/Quatro/Quatro"
import Tres from "../../calculadoras/Matrizes/Tres/Tres"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import Footer from "../../components/layout/Footer/Footer"
import Footer2 from "../../components/layout/Footer2/Footer2"
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { useState } from "react"

import './Matrizes.sass'


const Matrizes = () => {

  const [brasil, setBrasil] = useState<boolean>(true);
  const [sol, setSol] = useState<boolean>(true);
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  const [tema, setTema] = useState<string>('Mudar para modo escuro');
  const [color, setColor] = useState<string>('black');

  const mudarIdioma = () => {
    if (brasil) {
      setBrasil(false);
    } else {
      setBrasil(true);
    }
  }

  const mudarTema = () => {
    if (backgroundColor == '#FFFFFF') {
      setBackgroundColor('#151320');
      setSol(false);
      setTema('Mudar para modo claro');
      setColor('#FFFFFF');
    } else {
      setBackgroundColor('#FFFFFF');
      setSol(true);
      setTema('Mudar para modo claro');
      setColor('black');
    }
  }

  return (
    <div className="matrix" style={{backgroundColor, color}}>
        <div className="matrizes_menu">
          <NavbarPesquisar />
          <button onClick={mudarIdioma} id="botoes">
            {brasil ?  <FaFlagUsa /> : <GiBrazilFlag />}
          </button>
          <button onClick={mudarTema} title={tema} id="botoes">
            {sol ?  <LuMoon /> : <WiMoonAltThirdQuarter />}
          </button>
        </div>
        <Dois sol={sol} />
        <Tres sol={sol} />
        <Quatro sol={sol} />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Matrizes