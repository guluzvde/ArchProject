import logo from '../photo/arch.png'
import './Navbar.module.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  let activeStyle = {
    color:'#B08968'
  }

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink
              to="main"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Əsas səhifə
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Haqqımızda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Layihələr
            </NavLink>
          </li>
          <li>
            <NavLink
              to="services"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Xidmətlər
            </NavLink>
          </li>
          <li>
            <NavLink
              to="career"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Vakansiyalar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="news"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Xəbərlər
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Əlaqə
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
