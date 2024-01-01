import Temperatura from '../../calculadoras/Temperatura/Temperatura'
import Velocidade from '../../calculadoras/Velocidade/Velocidade'
import NavbarPesquisar from '../../common/navbarPesquisar/NavbarPesquisar'
import './Conversor.less'

const Conversor = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Velocidade />
        <Temperatura />
    </div>
  )
}

export default Conversor