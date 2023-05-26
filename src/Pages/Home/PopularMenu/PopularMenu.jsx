
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From  Menu"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 px-6">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-outline border-0 border-b-4 mt-6'>View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;