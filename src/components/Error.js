import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log('Error occurred:', error);
    return (
        <div>
            <span className="back"><a href="/">← Back</a></span>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <p>{error.status} : <i>{error.statusText || error.message}</i></p>
        </div>
    );
}

export default Error;