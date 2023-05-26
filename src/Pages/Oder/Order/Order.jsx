import { useState } from "react";
import img from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['pizza', 'soup', 'salad', 'dessert', ' drinks'];
    const { category } = useParams();
    console.log(category);
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();


    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={img} title="Order Food" ></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel >
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;