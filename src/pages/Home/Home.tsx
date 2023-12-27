import Navbar from "../../components/layout/Navbar/Navbar"
import Header from "../../components/layout/Header/Header"
import Footer from "../../components/layout/Footer/Footer"
import Principais from "../../components/Principais/Principais"

import './Home.sass'


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Principais /> 
      <Footer />
    </div>
  )
}

export default Home