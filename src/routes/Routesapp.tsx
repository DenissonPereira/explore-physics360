import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import About from '../pages/About/About.tsx'
import Conversor from '../pages/Conversor/Conversor.tsx'
import CalcIntegrais from '../pages/CalcIntegrais/CalcIntegrais.tsx'
import Calculadora from '../pages/Calculadora/Calculadora.tsx'
import Matrizes from '../pages/Matrizes/Matrizes.tsx'
import Bisseccao from '../pages/Bisseccao/Bisseccao.tsx'

const Routesapp = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/conversor' element={<Conversor />} />
            <Route path='/integrais' element={<CalcIntegrais />} />
            <Route path='/calculadora' element={<Calculadora />} />
            <Route path='/matrizes' element={<Matrizes />} />
            <Route path='/bisseccao' element={<Bisseccao />} />
        </Routes>
    </HashRouter>
  )
}

export default Routesapp