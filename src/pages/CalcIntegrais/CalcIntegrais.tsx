import Integrais from "../../calculadoras/Integrais/Integrais"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import Footer from "../../components/layout/Footer/Footer"
import Footer2 from "../../components/layout/Footer2/Footer2"


const CalcIntegrais = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Integrais />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default CalcIntegrais