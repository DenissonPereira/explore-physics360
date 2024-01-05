import GalaxiaAzul from '../../assets/galaxias/galaxia1.png'

import Integral from '../../assets/calculadoras/integral_foto.png'
import Celsius from '../../assets/calculadoras/celsius.png'
import Eletro from '../../assets/calculadoras/eletro.png'
import Calculadora from '../../assets/calculadoras/calculadora.png'

import './Principais.sass'
import './PrincipaisResponsivo.sass'

const Principais = () => {
    return (
        <div className='principais'>
            <div className="titulo">
                <p><span className='phy'>PhysiConvert:</span> Simplificando o Mundo Físico, Unidade por Unidade.</p>
            </div>
            <div className="imagens_dinamicas">
            <div className="principal">
                   <div className="card_atomo" id='card_1'>
                    <div className="inner_atomo">
                        <img src={GalaxiaAzul} alt="" />
                    </div>
                    <img src={Integral} alt="" className='title_atomo' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo" id='card_2'>
                    <div className="inner_atomo">
                        <img src={GalaxiaAzul} alt="" />
                    </div>
                    <img src={Celsius} alt="" className='title_atomo' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo" id='card_3'>
                    <div className="inner_atomo">
                        <img src={GalaxiaAzul} alt="" />
                    </div>
                    <img src={Eletro} alt="" className='title_atomo' id='eletro' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo" id='card_4'>
                    <div className="inner_atomo">
                        <img src={GalaxiaAzul} alt="" />
                    </div>
                    <img src={Calculadora} alt="" className='title_atomo'id='cal_icone' />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Principais