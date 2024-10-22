import { createContext } from "react";

const UserContext  = createContext({
    loggedInUser : "defalut User"
})

export default  UserContext