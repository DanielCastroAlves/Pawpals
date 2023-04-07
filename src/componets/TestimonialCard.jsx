import React from "react";

export default function TestimonialCard({name, testimonial, image}) {
 
  return (
    <div className="container-card">
      <div className="usuario-pet-image">
        <img alt="" src={`${image}`} />
      </div>
      <div className="name-description">
        <h4>{name}</h4>
        <p>{testimonial}</p>
      </div>
    </div>
  );
}
