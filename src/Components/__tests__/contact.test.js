import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

import "@testing-library/jest-dom"

test('should Check button is present', () => { 

    render(<Contact/>)

    const button =  screen.getAllByRole("button")
                            // getByText("")
                            //getByPlaceHolderText

    expect(button[0]).toBeInTheDocument();
 })

 //it : test  > both can be used same

it('should Check heading is present', () => { 

    render(<Contact/>)

    const heading =  screen.getAllByRole("heading")

    expect(heading[0 ]).toBeInTheDocument();
 })

 test('should load 2 input box', () => { 

    render(<Contact/>)

    const input =  screen.getAllByRole("textbox")

    //console.log(input.length)

    expect(input.length).toBe(2);
 })

//how to group
//works same, not important
describe("contact testing", ()=>{
    // test('should Check button is present', () => { 

    //     render(<Contact/>)
    
    //     const button =  screen.getAllByRole("button")
    //                             // getByText("")
    //                             //getByPlaceHolderText
    
    //     expect(button[0]).toBeInTheDocument();
    //  })
    
    
    // test('should Check heading is present', () => { 
    
    //     render(<Contact/>)
    
    //     const heading =  screen.getAllByRole("heading")
    
    //     expect(heading[0 ]).toBeInTheDocument();
    //  })
    
    //  test('should load 2 input box', () => { 
    
    //     render(<Contact/>)
    
    //     const input =  screen.getAllByRole("textbox")
    
    //     console.log(input.length)
    
    //     expect(input.length).toBe(2);
    //  })
    
})