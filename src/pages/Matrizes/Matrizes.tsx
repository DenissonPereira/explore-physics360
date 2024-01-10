import Dois from "../../calculadoras/Matrizes/Dois/Dois"
import Quatro from "../../calculadoras/Matrizes/Quatro/Quatro"
import Tres from "../../calculadoras/Matrizes/Tres/Tres"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import Footer from "../../components/layout/Footer/Footer"
import Footer2 from "../../components/layout/Footer2/Footer2"



const Matrizes = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Dois />
        <Tres />
        <Quatro />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Matrizes