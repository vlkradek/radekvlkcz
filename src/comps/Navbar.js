import Link from "next/link";
const Navbar = () => {
    return (
        <nav
        // className={classnames("navbar", {
        //     "navbar--hidden": !visible,
        // })}
        >
            <div className="row">
                <Link href="/" className="home-link">
                    Radek Vlk
                </Link>
                Link
                <ul>
                    <Link href="/about" className="navlink">
                        O mně
                    </Link>
                    <Link href="/portfolio" className="navlink">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="navlink contact-btn">
                        Kontaktujte mě
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
