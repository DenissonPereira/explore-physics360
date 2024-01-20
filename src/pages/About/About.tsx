import NavbarPesquisar from "../../common/navbarPesquisar/NavbarPesquisar"
import Sobre from "../../components/Sobre/Sobre"
import Footer from "../../components/layout/Footer/Footer"
import Footer2 from "../../components/layout/Footer2/Footer2"


const About = () => {
  return (
    <div>
      <NavbarPesquisar />
      <Sobre />
      <Footer brasil={true} />
      <Footer2 />
    </div>
  )
}

export default About