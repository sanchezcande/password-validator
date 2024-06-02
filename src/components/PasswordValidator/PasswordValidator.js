import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PasswordValidator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  hasSpecialCharacter,
  hasNumber,
  hasUppercaseLetter,
  hasNoConsecutiveLetters,
} from "../../utils/passwordValidator";

const PasswordValidator = ({ requirements }) => {
  const [password, setPassword] = useState("");
  const [validations, setValidations] = useState({});

  const validatePassword = (password) => {
    const results = requirements.reduce((acc, req) => {
      switch (req) {
        case "special":
          acc.special = hasSpecialCharacter(password);
          break;
        case "number":
          acc.number = hasNumber(password);
          break;
        case "uppercase":
          acc.uppercase = hasUppercaseLetter(password);
          break;
        case "noConsecutive":
          acc.noConsecutive = hasNoConsecutiveLetters(password);
          break;
        default:
          break;
      }
      return acc;
    }, {});
    setValidations(results);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const renderValidationItem = (condition, message) => (
    <li key={message}>
      <FontAwesomeIcon
        className={condition ? "valid" : "invalid"}
        icon={condition ? faCircleCheck : faCircleXmark}
      />
      {message}
    </li>
  );

  return (
    <div className="password-validator">
      <input
        type="text"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <ul>

        {requirements.includes("number") &&
          renderValidationItem(validations.number, "Has a number 0-9")}
        {requirements.includes("special") &&
          renderValidationItem(
            validations.special,
            "Has a special char !@#$%^&*"
          )}
        {requirements.includes("uppercase") &&
          renderValidationItem(
            validations.uppercase,
            "Has uppercase Letter"
          )}
        {requirements.includes("noConsecutive") &&
          renderValidationItem(
            validations.noConsecutive,
            "Not has consecutive letters (case insensitive)"
          )}
      </ul>
    </div>
  );
};

PasswordValidator.propTypes = {
  requirements: PropTypes.arrayOf(PropTypes.string),
};

export default PasswordValidator;
