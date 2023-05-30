import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center gap-6 m-24">
                            <Rating 
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <p>Review: {review.details}</p>
                            <h3 className="text-orange-400 text-3xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>


        </div>
    );
};

export default Testimonial;