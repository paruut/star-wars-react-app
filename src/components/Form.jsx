import React from "react";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [messageNumber, setMessageNumber] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [messageCheckbox, setMessageCheckbox] = useState("");

  // email validation

  const emailValidation = () => {
    const emailRegex =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!emailRegex.test(email) && email !== "") {
      setMessage("Nieprawidłowy format adresu e-mail");
      return false;
    } else {
      setMessage("");
      return true;
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  // number validation

  const numberValidation = () => {
    const numberRegex = /^[0-9]{9}$/;
    if (!numberRegex.test(number) && number !== "") {
      setMessageNumber("Nieprawidłowy numer telefonu");
      return false;
    } else {
      setMessageNumber("");
      return true;
    }
  };

  const handleOnChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  // checkbox validation

  const checkboxValidation = () => {
    if (!checkbox) {
      setMessageCheckbox("Wymagana akceptacja regulaminu");
      return false;
    } else {
      setMessageCheckbox("");
      return true;
    }
  };

  const handleOnChangeCheckbox = (e) => {
    setCheckbox(e.target.checked);
  };

  const submitForm = (e) => {
    const checkboxVal = checkboxValidation();
    const emailVal = emailValidation();
    const numberVal = numberValidation();

    if (checkboxVal && emailVal && numberVal) {
      try {
        fetch("https://swapi.dev/api/people/1/", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(localStorage.getItem("character")),
        });
      } catch (error) {
        throw error;
      }
    }
  };

  return (
    <form>
      <div className="form-title">
        <p>Formularz rejestracyjny</p>
        <hr />
      </div>
      <div className="form-flex">
        <label>Login:</label>
        <input type="text" required />
      </div>
      <div className="form-flex">
        <label>Hasło:</label>
        <input type="password" required />
      </div>
      <div className="form-flex">
        <label>E-mail:</label>
        <input
          className="input-email"
          type="email"
          value={email}
          id="email"
          onChange={handleOnChange}
          required
        />
        <p className="validation-msg">{message}</p>
      </div>
      <div className="form-flex">
        <label>Numer telefonu:</label>
        <input
          className="input-tel"
          type="tel"
          value={number}
          id="number"
          minLength="9"
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          onChange={handleOnChangeNumber}
          required
        />
        <p className="validation-msg">{messageNumber}</p>
      </div>
      <div className="form-checkbox">
        <input
          className="input-checkbox"
          type="checkbox"
          id="checkbox"
          onChange={handleOnChangeCheckbox}
          required
        />
        <label>Akceptuję Regulamin</label>
        <p className="checkbox-msg">{messageCheckbox}</p>
      </div>
      <div className="form-flex">
        <button
          className="btn-save"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            submitForm();
          }}
        >
          <span>zapisz</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
