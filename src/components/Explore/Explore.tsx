import { FaCalculator } from "react-icons/fa"
import { TbMathMax } from "react-icons/tb"
import { PiSigmaThin } from "react-icons/pi"
import { TbMath } from "react-icons/tb"
import { TbMathIntegrals } from "react-icons/tb"

import './Explore.sass'
import './ExploreResponsivo.sass'

const Explore = () => {


  const titulo = 'Explore mais';
  const descricao = 'Calculadoras para integrais, finanças, matrizes e muito mais';

  return (
    <div className="explorar">
      <div className='explore_caixa'>
        <h1>{titulo}</h1>
        <div className="cartoes_explorar">
          <div className="cartoes1">
            <TbMath />
          </div>
          <div className="cartoes2">
            <TbMathMax />
          </div>
          <div className="cartoes3">
            <FaCalculator />
          </div>
          <div className="cartoes4">
            <PiSigmaThin />
          </div>
          <div className="cartoes5">
            <TbMathIntegrals />
          </div>
        </div>
        <div className="calculadoras_explorar">
            <h2>Calculadoras</h2>
            <p>{descricao}</p>
          </div>
      </div>
    </div>
  )
}

export default Explore