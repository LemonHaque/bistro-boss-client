import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>

            {/* main cover */}
            <SectionTitle
                subHeading={"Don't Miss"} heading={"Today's Offer"}
            ></SectionTitle>
            {/* offered menu items */}
            <MenuCategory
                items={offered}
            ></MenuCategory>

            {/* desert menu items */}
            <MenuCategory
                items={desserts}
                title="Desserts"
                img={dessertImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizzas}
                title="Pizzas"
                img={pizzaImg}
            ></MenuCategory>
            {/* slalad menu items */}
            <MenuCategory
                items={salads}
                title="Salads"
                img={saladImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={soups}
                title="Soups"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;