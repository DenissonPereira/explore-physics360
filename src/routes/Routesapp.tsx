import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import About from '../pages/About/About.tsx'
import Conversor from '../pages/Conversor/Conversor.tsx'
import CalcIntegrais from '../pages/CalcIntegrais/CalcIntegrais.tsx'

const Routesapp = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/conversor' element={<Conversor />} />
            <Route path='/integrais' element={<CalcIntegrais />} />
        </Routes>
    </HashRouter>
  )
}

export default Routesapp