import Fractal from '../../assets/ai-generated-8267561_1920.png'
import Atomo from '../../assets/atomo.png'

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
                   <div className="card_atomo">
                    <div className="inner_atomo">
                        <img src={Fractal} alt="" />
                    </div>
                    <img src={Atomo} alt="" className='title_atomo' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo">
                    <div className="inner_atomo">
                        <img src={Fractal} alt="" />
                    </div>
                    <img src={Atomo} alt="" className='title_atomo' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo">
                    <div className="inner_atomo">
                        <img src={Fractal} alt="" />
                    </div>
                    <img src={Atomo} alt="" className='title_atomo' />
                   </div>
                </div>
                <div className="principal">
                   <div className="card_atomo">
                    <div className="inner_atomo">
                        <img src={Fractal} alt="" />
                    </div>
                    <img src={Atomo} alt="" className='title_atomo' />
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Principais