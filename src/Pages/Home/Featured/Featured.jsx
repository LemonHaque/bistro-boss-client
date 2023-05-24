import "./Featured.css"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImage from "../../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20 '>
            <SectionTitle
            subHeading={"Check It Out"}
            heading={"Featured Items"}
            ></SectionTitle>
            <div className='md:flex gap-10 justify-center items-center bg-black bg-opacity-50 py-20 px-28'>
                <div>
                    <img className="bg-gradient-to-r from-cyan-500 to-blue-500" src={featuredImage} alt="" />
                </div>
                <div className=''>
                    <p>Jan, 2023</p>
                    <p className='uppercase'>Where Can I Get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati facere rerum officia, praesentium adipisci fugiat voluptatibus voluptate et vitae soluta quae reiciendis at commodi unde a nobis ipsa iste! Nulla aut inventore at, molestias quos aperiam autem eaque obcaecati?.</p>

                    <button className='btn btn-outline btn-warning border-0 border-b-4 mt-6'>See More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;