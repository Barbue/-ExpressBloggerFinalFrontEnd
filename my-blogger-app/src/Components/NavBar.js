import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link className="link" to="/">Home </Link>
            <Link className="link2" to="/blog-form">Blog Form</Link>
        </div>
    )
}
export default NavBar;