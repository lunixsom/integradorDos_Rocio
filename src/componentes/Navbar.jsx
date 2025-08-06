function Navbar() {
    const navigate = useNavigate()
    return (
        <header class="navbar_container">
            <div class="navbar_content">
                <button class="menu-toggle" aria-label="Abrir menú">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <h1 class="animated-title">SHINY</h1>
            </div>

            <div class="navbar_options">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about-us.html">Sobre Nosotros</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </div>
        </header>

    )

}
export default Navbar