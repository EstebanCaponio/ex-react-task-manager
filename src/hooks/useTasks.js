import { useEffect, useState } from "react";
const { VITE_API_URL } = import.meta.env;

export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(e => console.error(e))
    }, []);

    const addTask = () => {

    }

    const removeTask = () => {

    }

    const updatedTask = () => {

    }

    return { tasks, addTask, removeTask, updatedTask }
}
