import {data3} from "../utils/data.tsx";
import style from "./styles/partners.module.css"
const Partners = () => {
    return (
        <div className={style.partners}>
            <section className={style.partners_container}>
                <h4>Meet Our Partner Applications</h4>
                <ul className={style.partners_container_imagenes}>
                    {data3.map(e => <li><a href={"#"} key={e.name}>
                        <img src={e.image} alt={e.name}/>
                    </a></li>)}
                </ul>
            </section>
        </div>
    );
};

export default Partners;