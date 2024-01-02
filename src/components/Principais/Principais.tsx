import Atomo1 from '../../assets/images/atomo1.png'
import Atomo2 from '../../assets/images/atomo2.png'

import './Principais.sass'
import './PrincipaisResponsivo.sass'

const Principais = () => {
    return (
        <div className='principais'>
            <div className="titulo">
                <p><span className='phy'>PhysiConvert:</span> Simplificando o Mundo Físico, Unidade por Unidade.</p>
            </div>
            <div className="principal">
                <div className="cartao">
                    <figure className="atomo">
                        <img src={Atomo2} alt="" />
                    </figure>
                    <p>Architecto ab natus ipsam distinctio adipisci dolorum sunt ad deleniti possimus quidem.</p>
                </div>
                <div className="cartao">
                    <figure className="atomo">
                        <img src={Atomo1} alt="" />
                    </figure>
                    <p>Architecto ab natus ipsam distinctio adipisci dolorum sunt ad deleniti possimus quidem.</p>
                </div>
                <div className="cartao">
                    <figure className="atomo">
                        <img src={Atomo2} alt="" />
                    </figure>
                    <p>Architecto ab natus ipsam distinctio adipisci dolorum sunt ad deleniti possimus quidem.</p>
                </div>
            </div>
        </div>
    )
}

export default Principais