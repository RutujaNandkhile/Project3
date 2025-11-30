import React from "react";

import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    desc: "Custom websites built using React, Angular, and modern technologies.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "UI/UX Designing",
    desc: "Creating beautiful and user-friendly interfaces for web and apps.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    desc: "Front-end and back-end solutions with secure API integrations.",
    icon: "💻",
  },
  {
    id: 4,
    title: "Responsive Design",
    desc: "Fully responsive layouts that look perfect on all devices.",
    icon: "📱",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
