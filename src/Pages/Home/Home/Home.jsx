import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
        </div>
    );
};

export default Home;