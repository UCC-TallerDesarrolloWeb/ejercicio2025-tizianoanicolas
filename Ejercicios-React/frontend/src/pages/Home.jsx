import tkdimg from '@assets/home/funcional.jpg';
import zumbaimg from '@assets/home/zumba.jpg';
import funcimg from '@assets/home/funcional.jpg';
import yogaimg from '@assets/home/yoga.webp';

const Home = () => {
    return (
        <div>
            <div>
                <img src={funcimg} alt="funcional" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src={zumbaimg} alt="zumba" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src={tkdimg} alt="tarkwondo" />
                <h2>Funcional</h2>
            </div>
            <div>
                <img src={yogaimg} alt="yoga" />
                <h2>Funcional</h2>
            </div>
        </div>
    )
}

export default Home;