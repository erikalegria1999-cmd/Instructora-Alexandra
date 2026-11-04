
    import { Link } from "react-router-dom";

    export default function Nav() {
    return (
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/login">login</Link>
            </li>
            <li>
                <Link to="/registro">Registro</Link>
            </li>
            <li>
                <Link to="/dash">Dashboard</Link>
            </li>
            <li>
                <Link to= "/producto">Productos</Link>
            </li>
            <Link to= "/contacto">Contacto</Link>
            </ul>
        </nav>
        </div>
    );
    }