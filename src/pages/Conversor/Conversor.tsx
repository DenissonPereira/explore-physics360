import Energia from '../../calculadoras/Energia/Energia'
import Temperatura from '../../calculadoras/Temperatura/Temperatura'
import Velocidade from '../../calculadoras/Velocidade/Velocidade'
import NavbarPesquisar from '../../common/navbarPesquisar/NavbarPesquisar'
import Footer from '../../components/layout/Footer/Footer'
import Footer2 from '../../components/layout/Footer2/Footer2'
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { useState } from 'react'

import './Conversor.less'

const Conversor = () => {

  const [brasil, setBrasil] = useState<boolean>(true);
  const [sol, setSol] = useState<boolean>(true);
  const [tema, setTema] = useState<string>('Mudar para tema escuro');
  const [corBack, setCorBack] = useState<string>('white');
  const [corTexto, setCorTexto] = useState<string>('black');

  const mudarIdioma = () => {
    if (brasil) {
      setBrasil(false);
    } else {
      setBrasil(true);
    }
  }

  const mudarTema = () => {
    if (sol) {
      setSol(false);
      setTema('Mudar para modo claro');
      setCorBack('#151320');
      setCorTexto('white');
    } else {
      setSol(true);
      setTema('Mudar para tema escuro');
      setCorBack('white');
      setCorTexto('black');
    }
  }

  return (
    <div className='principal_convesores' style={{backgroundColor: corBack, color: corTexto}}>
      <div className="icones_conversor">
        <NavbarPesquisar />
        <button onClick={mudarIdioma} className="botao_calculadora">
          {brasil ? <FaFlagUsa /> : <GiBrazilFlag />}
        </button>
        <button onClick={mudarTema} title={tema} className="botao_calculadora">
          {sol ? <LuMoon /> : <WiMoonAltThirdQuarter />}
        </button>
      </div>
      <Velocidade sol={sol} brasil={brasil} />
      <Temperatura sol={sol} brasil={brasil} />
      <Energia sol={sol} brasil={brasil} />
      <Footer brasil={brasil} />
      <Footer2 />
    </div>
  )
}

export default Conversor