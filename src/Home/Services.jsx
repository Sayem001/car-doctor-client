import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const[services,setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className="my-3">
            <div className="text-center">
                <h3 className="text-5xl py-5">Our Services</h3>
                <h2 className="text-3xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;