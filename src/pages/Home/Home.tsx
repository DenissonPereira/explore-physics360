import Navbar from "../../components/layout/Navbar/Navbar"
import Header from "../../components/layout/Header/Header"
import Footer from "../../components/layout/Footer/Footer"
import Principais from "../../components/Principais/Principais"
import Explore from "../../components/Explore/Explore"
import Footer2 from "../../components/layout/Footer2/Footer2"

import './Home.sass'
import './Home.less'




const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Principais />
      <Explore />
      <Footer />
      <Footer2 />
    </div>
  )
}

export default Home