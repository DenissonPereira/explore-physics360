import { FaCalculator } from "react-icons/fa"
import { TbMathMax } from "react-icons/tb"
import { PiSigmaThin } from "react-icons/pi"
import { TbMath } from "react-icons/tb"
import { TbMathIntegrals } from "react-icons/tb"

import './ExploreBlack.sass'
import './ExploreBlackResponsivo.sass'
import './ExploreBlack.less'

const ExploreBlack = () => {


  const titulo = 'Explore mais';
  const descricao = 'Calculadoras para integrais, finanças, matrizes e muito mais';

  return (
    <div className="explorar">
      <div className='explore_caixa'>
        <h1>{titulo}</h1>
        <div className="cartoes_explorar">
          <div className="cartoes1_black">
            <div className="cartao_1_black">
              <TbMath />
            </div>
          </div>
          <div className="cartoes2_black">
            <div className="cartao_2_black">
              <TbMathMax />
            </div>
          </div>
          <div className="cartoes3_black">
            <div className="cartao_3_black">
              <FaCalculator />
            </div>
          </div>
          <div className="cartoes2_black">
            <div className="cartao_2_black">
              <PiSigmaThin />
            </div>
          </div>
          <div className="cartoes1_black">
            <div className="cartao_1_black">
              <TbMathIntegrals />
            </div>
          </div>
        </div>
        <div className="calculadoras_explorar">
            <h2>Calculadoras</h2>
            <p>{descricao}</p>
            <button className="botao_explorar_black glow" title="Explorar">EXPLORAR</button>
          </div>
      </div>
    </div>
  )
}

export default ExploreBlack;