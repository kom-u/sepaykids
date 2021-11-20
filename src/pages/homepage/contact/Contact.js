import React, { useState } from "react";
import axios from "axios";

import "./contact.css";

function ServiceButton(props) {
  return (
    <span className='com__service-button'>
      <input
        name='category'
        type='radio'
        value={props.value}
        id={props.for}
        onChange={props.onChange}
      />
      <label className='p-2 me-2 mt-2' htmlFor={props.for}>
        {props.label}
      </label>
    </span>
  );
}

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
    category: "",
  });

  function onChange(event) {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    const newContact = {
      name: contact.name,
      email: contact.email,
      description: contact.description,
      category: contact.category,
    };

    axios
      .post("https://new.sepaystudio.com/api/contacts", newContact)
      .then((res) => console.log(res.data));
    const msg = `Halo, nama saya ${newContact.name}. Saya ingin bertanya mengenai ${newContact.category}.`;
    window.location = `https://wa.me/+6281232063424?text=${msg.replace(/ /g, "%20")}`;
  }

  return (
    <div className='homepage__contact overflow-hidden' id='contact'>
      <div className='row container'>
        <div className='col-12 col-md-6'>
          <h1 className='my-4'>Explore with us!</h1>
          <h2 className=''>Our Services</h2>

          <form onSubmit={onSubmit}>
            <ServiceButton
              value='Gamification'
              for='category-button-1'
              label='Gamification'
              onChange={onChange}
            />
            <ServiceButton
              value='Augmented Reality'
              for='category-button-2'
              label='Augmented Reality'
              onChange={onChange}
            />
            <ServiceButton
              value='Virtual Reality'
              for='category-button-3'
              label='Virtual Reality'
              onChange={onChange}
            />
            <ServiceButton
              value='Game'
              for='category-button-4'
              label='Game'
              onChange={onChange}
            />

            <div className='row p-2'>
              <input
                className='homepage__contact-form-input'
                type='text'
                name='name'
                placeholder='Name'
                onChange={onChange}
                value={contact.name}
              />
              <input
                className='homepage__contact-form-input'
                type='text'
                name='email'
                placeholder='E-mail'
                onChange={onChange}
                value={contact.email}
              />
              <input
                className='homepage__contact-form-input col-12'
                type='text'
                name='description'
                placeholder='Project Description'
                onChange={onChange}
                value={contact.description}
              />
            </div>
            <button type='submit' className='mt-3 px-3 fs-4 homepage__contact-submit'>
              Submit
            </button>
          </form>
        </div>
        <div className='col-12 col-md-6 d-none d-md-block'>
          <img src='/assets/homepage/contact.svg' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Contact;
