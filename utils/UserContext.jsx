const { createContext } = require("react");

const UserContext= createContext({
    loggedInUser: "Testing Context Learning",

});

export default UserContext;