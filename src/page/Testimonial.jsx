import React from "react";
import TestimonialCard from "../componets/TestimonialCard";
import userList from "../usuarios-testimonial/ListUsuariosPet";

function Testimonial() {
  return (
    <div className="page-testimonial">
      <div className="container-testimonial">
        <div className="title-testimonial">
          <h3>But don't just take our word for it </h3>
          <h5>here's what some of our happy adopters have to say:</h5>
        </div>
        <div className="container-card-testimonial">
          {userList.map((user) => (
            <TestimonialCard
              name={user.name}
              testimonial={user.testimonial}
              image={user.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
