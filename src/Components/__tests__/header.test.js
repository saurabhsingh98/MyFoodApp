import { render ,screen, fireEvent} from '@testing-library/react'
import { Provider } from 'react-redux'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'
import "@testing-library/jest-dom"
import AppStore from '../../../utils/AppStore'

it("should render header component with a login button", ()=>{

            render(
                <BrowserRouter>
                    <Provider store={AppStore}>
                        <Header/>
                    </Provider>
               </BrowserRouter>
                )

    const LoginButton= screen.getByRole("button" , {name:"login"})

    expect(LoginButton).toBeInTheDocument();
})


it("should change login button to logout button on click", ()=>{

    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
       </BrowserRouter>
        )

const LoginButton= screen.getByRole("button" , {name:"login"})

fireEvent.click(LoginButton);

const LogoutButton= screen.getByRole("button" , {name:"logout"})

expect(LogoutButton).toBeInTheDocument();
})