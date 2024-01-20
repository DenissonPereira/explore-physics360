import NavbarPesquisar from '../../common/navbarPesquisar/NavbarPesquisar'
import Deri from '../../calculadoras/Derivadas/Deri'
import Footer from '../../components/layout/Footer/Footer'
import Footer2 from '../../components/layout/Footer2/Footer2'

const Derivada = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Deri />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Derivada