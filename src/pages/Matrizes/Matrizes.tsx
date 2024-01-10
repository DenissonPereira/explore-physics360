import Dois from "../../calculadoras/Matrizes/Dois/Dois"
import Quatro from "../../calculadoras/Matrizes/Quatro/Quatro"
import Tres from "../../calculadoras/Matrizes/Tres/Tres"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"



const Matrizes = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Dois />
        <Tres />
        <Quatro />
    </div>
  )
}

export default Matrizes