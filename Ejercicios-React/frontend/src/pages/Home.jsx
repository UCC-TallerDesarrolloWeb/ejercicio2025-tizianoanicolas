import "@styles/Home.css";

import tkdimg from '@phome/taekwondo.jpg';
import zumbaimg from '@assets/home/zumba.jpg';
import funcimg from '@phome/funcional.jpg';
import yogaimg from '@assets/home/yoga.webp';

const Home = () => {
    return (
        <div className="card-home">
            <div>
                <img src={funcimg} alt="funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src={zumbaimg} alt="zumba" />
                <h2>Zumba</h2>
            </div>
            <div>
                <img src={tkdimg} alt="taekwondo" />
                <h2>Taekwondo</h2>
            </div>
            <div>
                <img src={yogaimg} alt="yoga" />
                <h2>Yoga</h2>
            </div>
        </div>
    )
}

export default Home;