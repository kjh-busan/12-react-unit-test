import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...Nothings...

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...Nothings...

    // Assert
    const greetingNotRenderingElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(greetingNotRenderingElement).toBeInTheDocument();
  });

  test("render changed if the button was clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.queryByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
});
