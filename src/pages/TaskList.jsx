import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('tasks:', tasks)

    return (
        <>
            <h2>Lista delle tasks</h2>
        </>
    )
}