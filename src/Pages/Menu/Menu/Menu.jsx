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
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
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
                items={drinks}
            ></MenuCategory>

            {/* desert menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                img={dessertImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* slalad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;