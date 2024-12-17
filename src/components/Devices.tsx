import {data, data2} from "../utils/data.tsx";
import style from "./styles/devices.module.css"
const Devices = () => {
    return (
        <div className={style.container}>
            <section className={style.devices}>
                <h4 className={style.header}>Watch IBO Player with these compatible streaming devices</h4>
                <div className={style.marquee}>
                    <div className={style.marquee__content}>
                        {data.map(element => <img src={element.image} alt={element.name} key={element.name}/>)}
                    </div>
                    <div className={style.marquee__content} aria-hidden={true}>
                        {data2.map(element => <img src={element.image} alt={element.name} key={element.name}/>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Devices;