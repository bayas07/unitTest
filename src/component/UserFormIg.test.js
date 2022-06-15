import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";
import { Arr } from "./array"

const testUser = (users) => {
  const inputElement = screen.getByTestId("test-user1");
  const buttonElement = screen.getByRole("button", { name: "Add" });
  return users.map((user) => {
    fireEvent.change(inputElement, { target: { value: user } });
    fireEvent.click(buttonElement);
  });
};

describe("User from and data integration test", () => {
  test("Checking User length", () => {
    render(<App />);

    const inputElement = screen.getByTestId("test-user1");
    const buttonElement = screen.getByRole("button", { name: "Add" });

    testUser(Arr);

    const totalElement = screen.getByText(/Total Users/i);
    screen.debug();
    expect(totalElement.textContent).toBe("Total Users - 500");
  });
});
