import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
        const {img, title, price} = service;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                {/* <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p> */}
                <div className="card-actions flex">
                <p className="text-xl font-semibold text-[#FF3811]">Price : ${price}</p>
                    <button className="btn text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;