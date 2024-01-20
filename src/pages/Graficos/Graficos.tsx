import Graf from "../../calculadoras/Graf/Graf"
import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import Footer from "../../components/layout/Footer/Footer"
import Footer2 from "../../components/layout/Footer2/Footer2"

const Graficos = () => {
  return (
    <div>
        <NavbarPesquisar />
        <Graf />
        <Footer brasil={true} />
        <Footer2 />
    </div>
  )
}

export default Graficos