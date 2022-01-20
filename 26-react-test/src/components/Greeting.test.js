import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'; 
import Greeting from "./Greatings";

describe('Greeting component', () => {
    test("renders Hello World as a test", () => {
      //Arrange
      render(<Greeting />);

      //Act
      //... nothing

      //Assert
      const holloWorldElement = screen.getByText("Hello World!", {
        exact: false,
      });
      expect(holloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see" you if the button was not clicked',()=>{
        render(<Greeting/>);
        const outputElement = screen.getByText("good to see you", {
          exact: false,
        });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked',()=>{
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });

    test('should not renders "good to see" when "Changed!" had been rendered',()=>{
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText("good to see you", {
          exact: false,
        });
        expect(outputElement).toBeNull();
    });
    
});

