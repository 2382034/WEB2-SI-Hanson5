import { NavLink, useNavigate } from "react-router-dom"
import logo from"../assets/logo.png"

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="navbar">
        <img src={logo} alt="" width={100} height={30} />
<ul>
    <NavLink to="/">
        <li>Home</li>
    </NavLink>
    <NavLink to="/product">
        <li>Product</li>
    </NavLink>
    <NavLink to="/about">
        <li>About</li>
    </NavLink>
    <NavLink to="/contact">
        <li>Contact</li>
    </NavLink>
    <NavLink to="/jobs">
        <li>Jobs</li>
    </NavLink>    
</ul>
<button onClick={() => navigate("/about")}>Get started</button>
    </div>
  )
}

export default Navbar