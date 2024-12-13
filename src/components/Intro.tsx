import style from "./styles/intro.module.css"
import {useRef, useState, useEffect} from "react";

const Intro = () => {
    const [scale, setScale] = useState(0.5);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const imageTop = imageRef.current.getBoundingClientRect().bottom /2;
                const windowHeight = window.innerHeight;
                const imageCenter = imageTop + imageRef.current.clientHeight / 2;
                const windowCenter = windowHeight / 2;

                // *** NUEVO: Factor de inicio temprano ***
                const triggerOffset = windowHeight / 2; // Escalar comienza 1/4 de la ventana antes

                // Calculamos la proporcion, considerando el offset.
                let newScale = 0.5 + Math.max(0, Math.min(0.5, (windowCenter + triggerOffset - imageTop) / (windowHeight/1.5)));
                // Si la imagen está por debajo de la ventana, mantener la escala en 1
                if (imageTop > windowHeight) {
                    newScale = 0.5;
                }else if(imageCenter <= windowCenter){
                    newScale = 1
                }

                setScale(newScale);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamar una vez para la posición inicial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section className={style.intro}>
            <div className={style.intro_first_section}>
                <div>
                    <h2><span>IBO Player: </span>Stream Smarter, Binge Better with Our Media Player Service</h2>
                    <p>Experience seamless streaming with IBO Player's user-friendly interface, diverse channel lineup, and high-quality content. Dive into a world of live TV, on-demand entertainment. and innovative features, all tailored to your preferences.</p>
                    <a href="#" className="btn">Explore</a>
                </div>
                <figure>
                    <img src="/assets/iptv-service.png" alt="Tv picture running IBO"/>
                </figure>
            </div>
            <div className={style.intro_second_section}>
                <figure className={style.intro_second_section_img}>
                    <img ref={imageRef} style={{ transform: `scale(${scale})` }} src="/assets/player-tv-preview-Bd8FneWc.png" alt="tv picture running IBO"/>
                </figure>

                <div className={style.intro_second_section_reproduction}>
                    <div className={style.intro_second_section_reproduction_bar}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={style.intro_second_section_reproduction_btns}>
                        <svg stroke="#B6B6B6" fill="#B6B6B6" strokeWidth="0" viewBox="0 0 256 256"

                             width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M134,80v44.6l37.09,22.25a6,6,0,0,1-6.18,10.3l-40-24A6,6,0,0,1,122,128V80a6,6,0,0,1,12,0Zm-6-46A93.4,93.4,0,0,0,61.51,61.56c-8.58,8.68-16,17-23.51,25.8V64a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12H44.73C52.86,88.29,60.79,79.35,70,70a82,82,0,1,1,1.7,117.62,6,6,0,1,0-8.24,8.72A94,94,0,1,0,128,34Z"></path>
                        </svg>
                        <svg stroke="#B6B6B6" fill="#B6B6B6" strokeWidth="0" viewBox="0 0 512 512"

                             width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm-16 328c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160zm112 0c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v160z"></path>
                        </svg>
                        <svg stroke="#B6B6B6" fill="#B6B6B6" strokeWidth="0" viewBox="0 0 256 256"

                             height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M134,80v44.6l37.09,22.25a6,6,0,0,1-6.18,10.3l-40-24A6,6,0,0,1,122,128V80a6,6,0,0,1,12,0Zm-6-46A93.4,93.4,0,0,0,61.51,61.56c-8.58,8.68-16,17-23.51,25.8V64a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H72a6,6,0,0,0,0-12H44.73C52.86,88.29,60.79,79.35,70,70a82,82,0,1,1,1.7,117.62,6,6,0,1,0-8.24,8.72A94,94,0,1,0,128,34Z"></path>
                        </svg>
                    </div>
                </div>

                <div className={style.intro_second_section_text}>
                    <h3>Unlocking Limitless Entertainment:
                        Explore a New Realm in Viewing</h3>
                    <p>Embark on an adventure where entertainment knows no limits. Our Media Player-inspired service is
                        your gateway to a universe of on-demand content, live TV, and innovative features</p>
                </div>
            </div>
        </section>
    );
};

export default Intro;