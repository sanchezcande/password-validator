import { render, screen, fireEvent } from "@testing-library/react";
import PasswordValidator from "./PasswordValidator";

const renderPasswordValidator = (requirements) => {
  render(<PasswordValidator requirements={requirements} />);
  return screen.getByRole("textbox");
};

const validateInput = (input, value) => {
  fireEvent.change(input, { target: { value } });
  return screen.getByText;
};

describe("PasswordValidator", () => {
  test("renders PasswordValidator component", () => {
    const input = renderPasswordValidator(["special", "number", "uppercase", "noConsecutive"]);
    expect(input).toBeInTheDocument();
  });

  test("contains special character", () => {
    const input = renderPasswordValidator(["special"]);
    const validateText = validateInput(input, "[!@#$%^&*]!");
    const specialValidationItem = validateText(/special char/).closest("li");
    const svgSpecial = specialValidationItem.querySelector("svg");
    expect(svgSpecial).toHaveClass("valid");
  });

  test("contains number", () => {
    const input = renderPasswordValidator(["number"]);
    const validateText = validateInput(input, "1234567890");
    const numberValidationItem = validateText(/number/).closest("li");
    const svgnumber = numberValidationItem.querySelector("svg");
    expect(svgnumber).toHaveClass("valid");

    const validateTextInvalid = validateInput(input, "abc");
    const numberInvalidationItem = validateTextInvalid(/number/).closest("li");
    const svgNonumber = numberInvalidationItem.querySelector("svg");
    expect(svgNonumber).toHaveClass("invalid");
  });

  test("contains uppercase letter", () => {
    const input = renderPasswordValidator(["uppercase"]);
    const validateText = validateInput(input, "ABC");
    const uppercaseValidationItem = validateText(/uppercase/).closest("li");
    const svgUppercase = uppercaseValidationItem.querySelector("svg");
    expect(svgUppercase).toHaveClass("valid");

    const validateTextInvalid = validateInput(input, "jdh");
    const uppercaseInvalidationItem = validateTextInvalid(/uppercase/).closest("li");
    const svgNoUppercase = uppercaseInvalidationItem.querySelector("svg");
    expect(svgNoUppercase).toHaveClass("invalid");
  });

  test("does not have consecutive letters", () => {
    const input = renderPasswordValidator(["noConsecutive"]);
    const validateText = validateInput(input, "aa");
    const noConsecutiveValidationItem = validateText(/consecutive letters/).closest("li");
    const svgNoConsecutive = noConsecutiveValidationItem.querySelector("svg");
    expect(svgNoConsecutive).toHaveClass("invalid");
  });

  test("renders all validation items", () => {
    const input = renderPasswordValidator(["special", "number", "uppercase", "noConsecutive"]);
    const validateText = validateInput(input, "A1!a");
    const allValidationItems = screen.getAllByRole("listitem");
    const allValidationItemsText = allValidationItems.map((item) => item.textContent);
    expect(allValidationItemsText).toEqual([
      "Has a number 0-9",
      "Has a special char !@#$%^&*",
      "Has uppercase Letter",
      "Not has consecutive letters (case insensitive)",
    ]);
  });
});
