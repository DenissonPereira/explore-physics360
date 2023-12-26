import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/explore-physics360'>Home</Link></li>
            <li><Link to='/explore-physics360/about'>About</Link></li>
        </ul>
    </div>
  )
}

export default Navbar