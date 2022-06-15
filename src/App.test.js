import { getByText, render, screen } from '@testing-library/react';
import App from './App';

describe("App element test", () => {
  test("Heading test", () => {
    const { getByText } = render(<App />);

    const headingElement = getByText(/Users D/i);

    expect(headingElement.textContent).toBe("Users Data");
  })
})