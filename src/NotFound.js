import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <h2>Sorry</h2>
      <p style={{marginBottom: "10px"}}>This page cannot be found</p>
      <Link to="/" className="not-found-link">Back to the Homepage</Link>
    </div>
   );
}
 
export default NotFound;