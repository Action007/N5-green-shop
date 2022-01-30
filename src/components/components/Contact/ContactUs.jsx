import React, { useRef, useState } from 'react';
import scss from './ContactUs.module.scss';

import { ReactComponent as Loader } from '../../../assets/svg/loader.svg';
import { ReactComponent as Success } from '../../../assets/svg/success.svg';

const ContactUs = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const [loading, setLoading] = useState(false);
  const [sendForm, setSendForm] = useState(false);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    message: true,
  });

  const nameInputClass = formInputsValidity.name ? scss.label : `${scss.label} ${scss.fail}`;
  const emailInputClass = formInputsValidity.email ? scss.label : `${scss.label} ${scss.fail}`;
  const messageInputClass = formInputsValidity.message ? scss.label : `${scss.label} ${scss.fail}`;

  const isNotEmpty = (value) => value.trim() !== '';
  const chartLength = (value) => value.trim().length > 10;

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const message = messageInput.current.value;
    const isValid = isNotEmpty(name) && !!validateEmail(email) && chartLength(message);

    setFormInputsValidity({
      name: isNotEmpty(name),
      email: !!validateEmail(email),
      message: chartLength(message)
    });

    if (!isValid) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);;
      setSendForm(true);
    }, 2000);
  };

  return (
    <div className={scss.wrapper}>
      <div className={scss.wrap}>
        <div className={scss.box}>
          <h2 className={scss.title}>Contact us</h2>
          <p className={scss.subtitle}>
            Send for us your request and we will
            get in touch with you as soon as possible
          </p>
        </div>
        <div className={scss.address}>
          <a className={scss.phone} href="tel:(+994)2265084">+994 226 50 84</a>
          <a className={scss.email} href="mailto:aqshin.baghirzade@gmail.com">aqshin.baghirzade@gmail.com</a>
        </div>
      </div>
      {!sendForm ? <form className={scss.form} onSubmit={(e) => submitHandler(e)}>
        <label className={nameInputClass}>
          <span>Name</span>
          <input
            className={scss.input}
            ref={nameInput}
            type="text"
            placeholder="Your name"
          />
          {!formInputsValidity.name &&
            <p>This field cannot be empty, please enter a valid name.</p>}
        </label>
        <label className={emailInputClass}>
          <span>E-mail</span>
          <input
            className={scss.input}
            ref={emailInput}
            type="email"
            placeholder="Your email"
          />
          {!formInputsValidity.email &&
            <p>Please enter a valid email address.</p>}
        </label>
        <label className={messageInputClass}>
          <span>Message</span>
          <textarea
            className={scss.textarea}
            ref={messageInput}
            placeholder="Your message">
          </textarea>
          {!formInputsValidity.message &&
            <p>This field cannot be less than 10 characters.</p>}
        </label>
        <div className={scss.inner}>
          <button className={scss.button} type="submit">Send request</button>
          <span className={scss.text}>By sending request you agree to out Pivacy&Policy</span>
        </div>
        {loading && <Loader />}
      </form> :
        <div className={scss.success}>
          <span>
            <Success />
          </span>
        </div>}
    </div>
  );
};

export default ContactUs;