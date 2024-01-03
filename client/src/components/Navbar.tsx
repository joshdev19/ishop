import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <Link to={'/'}> Logo </Link>
            <div className="container">
                <button type="button" className="carts"> carts </button>
                <button type="button" className="logout"> logout </button>
            </div>
        </nav>
    )

}

export default Navbar;