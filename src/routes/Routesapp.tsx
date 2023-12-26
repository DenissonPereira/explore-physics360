import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import About from '../pages/About/About.tsx'

const Routesapp = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </HashRouter>
  )
}

export default Routesapp