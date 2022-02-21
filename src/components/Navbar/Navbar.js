import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from "react-router-dom";


const Navbar = () => {
    // Links
    const Links = [
        { name: "HOME", path: "/" },
        { name: "SHOP", path: "/products" },
        { name: "ABOUT", path: "/about" },
        { name: "CONTACT", path: "/contact" },
        { name: "ERROR", path: "/*" }, // Se coloca en el NAV solo para visualizarlo, luego retirar.
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container pe-0">
                <NavLink to="/" className="link">
                    <p className="navbar-brand ms-0 ps-0" href="">WARE <em className="brand-tech">TECH</em></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                </NavLink>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {Links.map((link) => (
                            <li  key={link.name}>
                                <NavLink to={link.path} className="nav-item px-4 nav-link">
                                    {link.name}
                                </NavLink>
                            </li>
            ))}
                        <NavLink to="/cart">
                            <CartWidget />
                        </NavLink>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar