import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } , [])

    return (
        <div className="mt-6">
            <div className="text-center">
                <h4 className="text-xl font-bold text-[#FF3811]">Services</h4>
                <h2 className="text-5xl font-bold mt-5">Our Service Area</h2>
                <p className="text-[#737373] mt-5">The majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                    key={service._id} service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;