import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container pe-0">
                <a className="navbar-brand ms-0 ps-0" href="">WARE <em className="brand-tech">TECH</em></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item px-4 nav-link">HOME</li>
                        <li className="nav-item px-4 nav-link">PC GAMER</li>
                        <li className="nav-item px-4 nav-link">GPU</li>
                        <li className="nav-item px-4 nav-link">CPU</li>
                        <li className="nav-item px-4 nav-link">RAM</li>
                        <li className="nav-item px-4 nav-link">TOWER</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar