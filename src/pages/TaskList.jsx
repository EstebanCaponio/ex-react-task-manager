import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow";

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('tasks:', tasks)

    return (
        <>
            <h2>Lista delle tasks</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>nome</th>
                            <th>status</th>
                            <th>data creazione</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}