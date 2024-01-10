import Bissec from '../../calculadoras/Bissec/Bissec'
import NavbarPesquisar from '../../common/navbarPesquisar/NavbarPesquisar'
import Footer from '../../components/layout/Footer/Footer'
import Footer2 from '../../components/layout/Footer2/Footer2'
import './Bisseccao.sass'

const Bisseccao = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Bissec />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Bisseccao