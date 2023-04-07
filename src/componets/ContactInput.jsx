import React from "react";
import { FaPaw } from "react-icons/fa";

export default function ContactInput() {
  return (
    <div className="container-input">
      <input className="input-text-form" placeholder="Name" type="text" />
      <input className="input-text-form" placeholder="Email" type="email" />
      <input
        className="input-text-form"
        placeholder="Phone number"
        type="number"
      />
      <textarea
        className="input-textArea-form"
        placeholder="Let us know the day and time "
        rows="4"
        cols="50"
      />
      <button className="input-buttom">
        <FaPaw />
        <p>send</p>
      </button>
    </div>
  );
}
