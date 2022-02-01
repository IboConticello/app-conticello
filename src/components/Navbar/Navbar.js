import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container pe-0">
                <a class="navbar-brand ms-0 ps-0" href="">WARE <em class="brand-tech">TECH</em></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item px-4 nav-link">HOME</li>
                        <li class="nav-item px-4 nav-link">PC GAMER</li>
                        <li class="nav-item px-4 nav-link">GPU</li>
                        <li class="nav-item px-4 nav-link">CPU</li>
                        <li class="nav-item px-4 nav-link">RAM</li>
                        <li class="nav-item px-4 nav-link">TOWER</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar