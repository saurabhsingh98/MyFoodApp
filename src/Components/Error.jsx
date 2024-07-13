import { useRouteError } from "react-router-dom";
import { ERROR_LINK_IMG } from "../../utils/constants";

const Error = ()=> {
    const errr= useRouteError();
    console.log(errr);

    return (
        <div className="error-component">
            <h1>Bhari mistake ho gayi</h1>
            <h2>Mistake: {errr.statusText            }</h2>
            <h2>Mistake Code: {errr.status}</h2>
            <img src={ERROR_LINK_IMG} alt="mistake" />
        </div>
    );
}

export default Error;