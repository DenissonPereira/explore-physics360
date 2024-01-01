import Energia from '../../calculadoras/Energia/Energia'
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
        <Energia />
    </div>
  )
}

export default Conversor