import React from "react";
import { images } from "../../constants";
import "./ServiceOffered.scss";

const ServiceOffered = () => {
  const services = [
    {
      title: "free shipping",
      image: images.shipping
    },
    {
      title: "100% money back",
      image: images.refund
    },
    {
      title: "support 24/7",
      image: images.support
    }
  ];

  return (
    <div className="services__container">
      {services.map((service, i) => (
        <div key={i} className="service">
          <div className="service-logo">
            <img src={service.image} alt="services" />
          </div>
          <div className="service-title">
            <p>{service.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceOffered;
