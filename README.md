# Password Validator Component

## Introduction
This component is a reusable password validation tool developed for React applications. It provides real-time feedback to users as they type in their passwords, indicating whether their passwords meet certain requirements or not.

## Features
- Validates passwords based on customizable requirements.
- Supports the following validation criteria:
  - Contains one or more special characters: `!@#$%^&*`
  - Contains a number (0-9)
  - Contains at least one uppercase letter
  - Does not contain consecutive letters (case sensitive)
- Provides visual feedback through icons indicating the status of each validation requirement.
- Easy to integrate into existing React applications.
- Customizable and extensible.

# Installation

To install the Password Validator component, simply run:

```bash
npm install @your-package/password-validator


Import the PasswordValidator component into your React application and pass the required validation criteria as props.

Customize the validation criteria based on your application\'s requirements.

## Usage

Import the PasswordValidator component into your React application and pass the required validation criteria as props.

Customize the validation criteria based on your application\'s requirements.

Place the PasswordValidator component wherever you want it to appear in your application.



##Example Usage

```javascript
import React from "react";
import PasswordValidator from "@your-package/password-validator";

function App() {
  return (
    <div>
      <h1>Sign Up</h1>
      <PasswordValidator requirements={["special", "number", "uppercase", "noConsecutive"]} />
    </div>
  );
}

export default App;
