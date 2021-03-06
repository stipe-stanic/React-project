import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [people, setPeople] = useState([]);

  /* Every time user types into input field,
  corresponding name attribute gets it's value assigned */
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.message) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", message: "" });
    }
    if (people.length >= 3) {
      const lastPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([lastPerson]);
    }
  };

  return (
    <div className="form-blocks">
      <form className="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input
            id="name"
            name="name"
            type="text"
            value={person.name}
            onChange={handleChange}
            placeholder="Write your name here.."
          ></input>
        </p>
        <p type="Email:">
          <input
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            type="email"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p type="Message:">
          <input
            id="message"
            name="message"
            value={person.message}
            onChange={handleChange}
            type="text"
            placeholder="What would you like to tell us.."
          ></input>
        </p>
        <button type="submit" onClick={handleSubmit}>
          Send Message
        </button>
        <div>
          <span className="fa fa-phone">
            <FaPhone />
          </span>
          001 1023 567
          <span className="fa fa-envelope-o">
            <FaEnvelope />
          </span>{" "}
          contact@company.com
        </div>
      </form>
      <div className="form-display">
        {people.map((person) => {
          const { id, name, email, message } = person;
          return (
            <div key={id} style={{ marginTop: 10 }}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{message}</p>
              <hr className="form-hr" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
