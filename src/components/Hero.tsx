import style from "./styles/hero.module.css"
import {useEffect, useState} from "react";

const Hero = () => {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true);
    }, [])
    return (
        <section className={style.hero}>
            <div className={`${style.overlay} ${isMounted && style.overlay_active}`}></div>
            <div className={`${style.hero_content} ${isMounted && style.hero_content_active}`}>
                <h1><span>IBO Player:</span> Where Media Player Evolution Takes Center Stage</h1>
                <p>Step into IBO Player, the beating heart of Media Player innovation! Our platform is the hub for cutting-edge entertainment solutions, boasting an extensive collection of state-of-the-art streaming technologies and thoughtfully curated content</p>
                <a>Explore</a>
            </div>
        </section>
    );
};

export default Hero;