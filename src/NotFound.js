import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>this page can't be found</p>
            <Link to="/">Back to  Homepage... </Link> 
        </div>
     );
}
 
export default NotFound;