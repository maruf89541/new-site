import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt=""></img>
            <h3 className="py-3">{name}</h3>
            <h5>{price}</h5>
            <p className="px-5">{description}</p>
            <Link to={`/booking/${id}`}>
                <Button variant="primary">Book  {name.toLowerCase()}</Button>{' '}
            </Link>
        </div>
    );
};

export default Service;