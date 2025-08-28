import { useCallback, useContext, useMemo, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow";


// funzione debounce
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log('tasks:', tasks)

    const [searchQuery, setSearchQuery] = useState('');
    const debounceSetSearchQuery = useCallback(debounce(setSearchQuery, 500), []);

    const [sortBy, setSortBy] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? '⭣' : '⭡'

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    const filteredAndSortedTasks = useMemo(() => {
        return [...tasks]
            .filter((t) => t.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
            .sort((a, b) => {
                let comparison;

                if (sortBy === 'title') {
                    comparison = a.title.localeCompare(b.title)
                } else if (sortBy === 'status') {
                    const statusOptions = ['To do', 'Doing', 'Done']
                    comparison = statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status)
                } else if (sortBy === 'createdAt') {
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();
                    comparison = dateA - dateB;
                }

                return comparison * sortOrder
            })
    }, [tasks, sortBy, sortOrder, searchQuery]);


    return (
        <>
            <h2>Lista delle tasks</h2>
            <input type="text"
                className="task-search-input"
                placeholder="Cerca una task..."
                onChange={e => { debounceSetSearchQuery(e.target.value) }} />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('title')}>
                                nome {sortBy === 'title' && sortIcon}
                            </th>
                            <th onClick={() => handleSort('status')} >
                                status {sortBy === 'status' && sortIcon}
                            </th>
                            <th onClick={() => handleSort('createdAt')} >
                                data creazione {sortBy === 'createdAt' && sortIcon}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndSortedTasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))}
                    </tbody>
                </table >
            </div >
        </>
    )
}