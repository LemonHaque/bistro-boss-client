import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then((response) => response.json())
            .then((data) =>{
                const popularItems = data.filter(item => item.category === 'popular')
                 setMenu(popularItems)})
    }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From  Menu"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 px-6">
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem> )
                }
            </div>

        </section>
    );
};

export default Menu;