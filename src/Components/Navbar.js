import { Link, useMatch, useResolvedPath } from "react-router-dom"

import logo from '../logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt='logo'/><span className='logo'>CROPWISE</span>
      </Link>
      {/* <ul>
        <CustomLink to="/crop"> Crop</CustomLink>
      </ul> */}
      <ul>
        <CustomLink to="/about">About</CustomLink>
      </ul>
      
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}