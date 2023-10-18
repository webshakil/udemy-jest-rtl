import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import {render, screen} from '@testing-library/react'

describe("Test counter component",()=>{
    it("increment and decrement the count when the buttons are clicked", async ()=>{
        render(<Counter/>);

        //Find the initial count element 
        const conuntElemtn = await screen.findByTestId('count');

        //find the increment and decrement buttons
        const incrementButton = await screen.findByTestId('increment-button');
        const decrementButton = await screen.findByTestId('decrement-button');

        //the count should start at 0
        expect(conuntElemtn).toHaveTextContent('0');

        //click the increment button and wait for the count to update
        userEvent.click(incrementButton);
        const updatedCountElement = await screen.findByTestId('count');
        expect(updatedCountElement).toHaveTextContent('1');

        //click the decreament button and wait for the count to update
        userEvent.click(decrementButton);
        const updatedCountElementAafterDecrement = await screen.findByTestId('count');
        expect(updatedCountElementAafterDecrement).toHaveTextContent('0');


    })
})

