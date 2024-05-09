import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us paage Test cases",()=>{
    test("should load contact us component", () => {
        render(<Contact />);
      
        const heading=screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
      });
      test("should load button inside contact us component", () => {
          render(<Contact />);
        
          const button=screen.getByRole("button");
          //Assertion
          expect(button).toBeInTheDocument();
        });
      
        test("should load input inside contact us component", () => {
          render(<Contact />);
        
          const inputName=screen.getByPlaceholderText("name");
          //Assertion
          expect(inputName).toBeInTheDocument();
      
        });
      
        test("should load 2 input boxes inside contact us component", () => {
          render(<Contact />);
        
          const inputBoxes=screen.getAllByRole("textbox");
          //Assertion
          expect(inputBoxes.length).toBe(2)
        });
      
      
      
})



