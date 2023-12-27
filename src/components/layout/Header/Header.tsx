import Math from '../../../assets/images/maths.jpg'
import Buscador from '../Buscador/Buscador'
import { GiAtom } from "react-icons/gi"

import './Header.sass'

const Header = () => {
    return (
        <div className='header'>
            <figure className="math">
                <img src={Math} alt="Capa de matemática" />
            </figure>
            <div className="logo">
                <GiAtom />
                <div className="buscador">
                    <Buscador />
                </div>
            </div>
        </div>
    )
}

export default Header