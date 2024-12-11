import style from "./styles/navbar.module.css"
import {useState, useEffect, useRef} from "react";
const Navbar = () => {
    const [mobile, setMobile] = useState<boolean>(false)
    const handle_mobile_menu = () => {
        setMobile(!mobile)
        return
    }
    const [isScrolled, setIsScrolled] = useState(false);
    const prevScrollPosRef = useRef(0);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrolled(currentScrollPos > 500 && currentScrollPos > prevScrollPosRef.current);
            prevScrollPosRef.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`${style.navbar} ${isScrolled && style.navbar_hidde}`}>
            <nav className={style.navbar_container}>
                <figure className={style.logo}>
                    <a href={"/"}><img src={"/assets/ibo-player-logo.png"} alt="ibo player logo"/></a>
                </figure>
                {/*desktop menu elements*/}
                <ul className={`${style.navbar_container_desktop_menu}`}>
                    <li><a href="#">features</a></li>
                    <li><a href="#">faqs</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">downloads</a></li>
                    <li><a href="#">activate device</a></li>
                    <li><a href="#">manage playlists</a></li>
                </ul>

                {/* mobile menu elements*/}
                <div className={style.navbar_container_mobile}>
                    <div onClick={() => handle_mobile_menu()}
                         className={`${style.hamburger} ${mobile && style.active}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={`${style.navbar_container_mobile_menu} ${mobile && style.active}`}>
                        <li><a href="#">features</a></li>
                        <li><a href="#">faqs</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">downloads</a></li>
                        <li><a href="#">activate device</a></li>
                        <li><a href="#">manage playlists</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;