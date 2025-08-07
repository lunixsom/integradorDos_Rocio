import { NavLink, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    return (
        <header class="navbar_container">
            <div class="navbar_content">
                <button class="menu-toggle" aria-label="Abrir menú">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <h1 class="animated-title" onClick={() => navigate("/")}>SHINY</h1>
            </div>

            <div class="navbar_options">
                <ul>
                    <NavLink to="/pages/Home">Home</NavLink>
                    <NavLink to="/about-us.html">Sobre Nosotros</NavLink>
                    <NavLink to="contact.html">Contacto</NavLink>
                </ul>
            </div>
        </header>

    )

}
export default Navbar