import Navbar from "../../components/layout/Navbar/Navbar"
import Header from "../../components/layout/Header/Header"
import Footer from "../../components/layout/Footer/Footer"
import Principais from "../../components/Principais/Principais"
import Explore from "../../components/Explore/Explore"
import Footer2 from "../../components/layout/Footer2/Footer2"
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { LuMoon } from "react-icons/lu";
import HeaderDark from "../../components/layout/HeaderDark/HeaderDark"
import PrincipaisWhite from "../../components/PrincipaisWhite/PrincipaisWhite"

import './Home.sass'
import './Home.less'
import { useState } from "react"




const Home = () => {

  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [color, setColor] = useState('black');
  const [sol, setSol] = useState(true);
  const [foguete, setFoguete] = useState(true);
  const [principaisW, setPrincipaisW] = useState(true);
  const [tema, setTema] = useState('Mudar para modo escuro');

  const mudarTema = () => {
    if (backgroundColor == '#FFFFFF') {
      setBackgroundColor('#151320');
      setColor('white');
      setSol(false);
      setFoguete(false);
      setPrincipaisW(false);
      setTema('Mudar para modo claro');
    } else {
      setBackgroundColor('#FFFFFF');
      setColor('black');
      setSol(true);
      setFoguete(true);
      setPrincipaisW(true);
      setTema('Mudar para modo escuro');
    }
  };

  return (
    <div className="home" style={{backgroundColor}}>
      <nav className="navegacao">
        <Navbar />
        <button onClick={mudarTema} title={tema}>
          {sol ?  <LuMoon /> : <WiMoonAltThirdQuarter />} 
        </button>
      </nav>
      <div className="header_home" style={{ color}}>
        {foguete ? <Header /> : <HeaderDark />}
      </div>
      <div className="principais" style={{color}}>
        {principaisW ? <PrincipaisWhite /> : <Principais />}
      </div>
      <div className="explore_home" style={{color}}>
        <Explore />
      </div>
      <div className="footer_home" style={{color}}>
        <Footer />
        <Footer2 />
      </div>
    </div>
  )
}

export default Home