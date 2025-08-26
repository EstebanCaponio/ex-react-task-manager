import { NavLink } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <ul>
                <li>
                    <NavLink to='/' >Task List</NavLink>
                </li>
                <li>
                    <NavLink to='/add'>Add Task</NavLink>
                </li>
            </ul>
        </>
    )
}