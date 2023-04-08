const Footer = () => {
    return (
        <footer>
            <div className="row">
                <p>Radek Vlk</p>
                <p>&copy; 2023</p>
                <div className="links">
                    <a href="mailto: radekvlk@radekvlk.cz">
                        <i class="bx bxs-envelope"></i>
                        <span>|</span>radekvlk@radekvlk.cz
                    </a>
                    <a href="https://github.com/vlkradek">
                        <i class="bx bxl-github"></i>
                        <span>|</span>vlkradek
                    </a>
                    <a href="https://www.instagram.com/v.radekk/">
                        <i class="bx bxl-instagram-alt"></i>
                        <span>|</span>
                        v.radekk
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
