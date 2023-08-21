import {Link} from 'react-router-dom'
const NotFound = () => {
    return (  
        <div className="notfound">
            <h2>404</h2>
            <p>That Page cannot be found :(</p>
            <Link to='/'> <button>Back to the Homepage...</button></Link>
        </div>
    );
}
 
export default NotFound;