import Math from '../../../assets/images/maths.jpg'
import { GiAtom } from "react-icons/gi"

import './Header.sass'
import './HeaderResponsivo.sass'
import BuscadorWhite from '../../BuscadorWhite/BuscadorWhite'

const Header = () => {
    return (
        <div className='header'>
            <figure className="math">
                <img src={Math} alt="Capa de matemática" />
            </figure>
            <div className="logo">
                <div className="atomo">
                    <GiAtom />
                </div>
                <div className="buscador">
                    <BuscadorWhite />
                </div>
            </div>
        </div>
    )
}

export default Header