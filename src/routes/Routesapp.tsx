import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import About from '../pages/About/About.tsx'
import Conversor from '../pages/Conversor/Conversor.tsx'

const Routesapp = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/conversor' element={<Conversor />} />
        </Routes>
    </HashRouter>
  )
}

export default Routesapp