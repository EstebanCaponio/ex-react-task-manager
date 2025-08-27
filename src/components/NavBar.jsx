import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' >Lista Task</NavLink>
                </li>
                <li>
                    <NavLink to='/add'>Aggiungi Task</NavLink>
                </li>
            </ul>
        </nav>
    );
}