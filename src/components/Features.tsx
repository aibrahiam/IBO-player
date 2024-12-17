import Partners from "./Partners.tsx";
import style from "./styles/features.module.css"

const Features = () => {
    return (
        <section>
            <div className={style.header}>
                <div>Our Features</div>
                <h4>Seamless Streaming Across Every Screen</h4>
                <p>From your TV to your tablet or smartphone, our platform ensures a consistent and immersive viewing
                    experience.</p>
            </div>
            <div className={style.grid}>
                <div className={style.a}>
                    <img src="/assets/1-DXXIehDi.png" alt="placeholder"/>
                </div>
                <div className={style.b}>
                    <img src="/assets/2-MYT5zDHB.png" alt="placeholder"/>
                </div>
                <div className={style.c}>
                    <img src="/assets/4-Bp-Zi30X.png" alt="placeholder"/>
                </div>
                <div className={style.d}>
                    <img src="/assets/3-DogtsELa.png" alt="placeholder"/>
                </div>
            </div>
            <Partners/>

        </section>
    );
};

export default Features;