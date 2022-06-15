import { render, screen } from '@testing-library/react';
import App from './App';

describe("App element test", () => {
  test("Heading test", () => {
    const { getByRole } = render(<App />);

    const headingElement = getByRole("heading");

    expect(headingElement.textContent).toBe("Users Data");
  })
})