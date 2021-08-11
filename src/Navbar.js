import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
         
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create" >New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

//Link tag to use react intercept function,so that react will not send the request to server
//and will resolve the link in the browser only ,for that we are remove <a href=""> and will replace that with Link provided by the react-router-dom