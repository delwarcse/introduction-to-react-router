import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="text-center font-bold">
            <h2 className="flex justify-center mt-70 bg-amber-300 items-center font-medium text-2xl">
                Oops Not Found .....!!
            </h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not Found 2</h3>
                    <p>Go back where you from</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;