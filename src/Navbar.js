import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a className="mainlink" href="/navhead">
            <h1 className="navhead" > Blogie</h1></a>
            <div className="links">
                <Link className="firstlink" to="/">Home</Link>
                <Link className="secondlink" to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar; 