import Energia from '../../calculadoras/Energia/Energia'
import Temperatura from '../../calculadoras/Temperatura/Temperatura'
import Velocidade from '../../calculadoras/Velocidade/Velocidade'
import NavbarPesquisar from '../../common/navbarPesquisar/NavbarPesquisar'
import Footer from '../../components/layout/Footer/Footer'
import Footer2 from '../../components/layout/Footer2/Footer2'
import './Conversor.less'

const Conversor = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Velocidade />
        <Temperatura />
        <Energia />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Conversor