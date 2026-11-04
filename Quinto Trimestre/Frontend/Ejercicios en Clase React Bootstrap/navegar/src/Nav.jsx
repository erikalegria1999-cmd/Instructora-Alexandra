
    import { Link } from "react-router-dom";

    export default function Nav() {
    return (
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/registro">Registro</Link>
            </li>
            <li>
                <Link to="/dash">Dashboard</Link>
            </li>
            <li>
                <Link to= "/usuario">usuario</Link>
            </li>
            </ul>
        </nav>
        </div>
    );
    }
