import { render,screen ,fireEvent} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// it or test means one and same
it('should load header  component', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
})

it('should should change login btn to logout on click ', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );
      

   // We cn use regEx to find .ex: /Cart/ 
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
})

it('should load header  component', () => { 
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("button",{name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
})
