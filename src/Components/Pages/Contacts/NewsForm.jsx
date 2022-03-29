import React, { useState } from "react";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import ErrorText from "./ErrorText";
import FormInput from "./FormInput";

function NewsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);

  const [nameError, setNameError] = useState('"Имя" не может быть пустым!');
  const [emailError, setEmailError] = useState('"Email" не может быть пустым!');
  const [messageError, setMessageError] = useState(
    '"Сообщение" не может быть пустым!'
  );
  const [formValid, setFormValid] = useState(false);

  // That func switchs "dirty" var into true, if the inputs is full
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "message":
        setMessageDirty(true);
        break;
    }
  };

  // Handler of an error for a email
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Некоректный email!");
    } else {
      setEmailError("");
    }
  };

  // Handler of an error for a name
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 10) {
      setNameError("Имя должно быть больше 2 и меньше 10 символов!");
    } else {
      setNameError("");
    }
  };

  // Handler of an error for a message
  const messageHandler = (e) => {
    setMessage(e.target.value);
    if (e.target.value.length < 1) {
      setMessageError('"Сообщение" не может быть пустым!');
    } else {
      setMessageError();
    }
  };

  // That function sends the form into email
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vhgtote",
        "template_8knni9j",
        e.target,
        "Z6c8Gl6tVrzHK7k-t"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    setNameError("");
    setEmailError("");
    setMessageError("");
  }

  // If there is no error, makes the button available to click. Otherwise, makes it not available.
  useEffect(() => {
    if (!nameError && !emailError && !messageError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [nameError, emailError, messageError]);

  return (
    <form name="myform" onSubmit={sendEmail}>
      {/* Name */}
      <h3 className="form-sub-title">Имя:</h3>
      <ErrorText dirty={nameDirty} error={nameError} />
      <FormInput
        blurHandler={blurHandler}
        value={name}
        changeHandler={nameHandler}
        placeHolder="Ваше имя"
        name="name"
      />

      {/* Email */}
      <h3 className="form-sub-title">Email:</h3>
      <ErrorText dirty={emailDirty} error={emailError} />
      <FormInput
        blurHandler={blurHandler}
        value={email}
        changeHandler={emailHandler}
        placeHolder="Ваша почта"
        name="email"
      />

      {/* Message */}
      <h3 className="form-sub-title">Сообщение:</h3>
      <ErrorText dirty={messageDirty} error={messageError} />
      <textarea
        onBlur={(e) => blurHandler(e)}
        name="message"
        value={message}
        onChange={(e) => messageHandler(e)}
        type="text"
        placeholder="Ваше сообщение"
        className="input"
      />

      {/* Button */}
      <button
        type="submit"
        className="px-[63px] mt-[40px] sm:text-[18px] sm:px-[12px] md:px-[54px] lg:text-[22px]
        hover:text-primary"
        disabled={!formValid}
      >
        Отправить
      </button>
    </form>
  );
}

export default NewsForm;
