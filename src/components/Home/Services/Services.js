import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/Genius-Car-Mechanics-module-60/main/public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services-container" id="Services">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}

                ></Service>)
            }

        </div>
    );
};

export default Services;