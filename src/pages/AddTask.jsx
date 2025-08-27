import { useMemo, useRef, useState } from "react"

const symbols = "!@#$%^&*()-_=+[]{}|;:'\"\,.<>?/`~";

export default function AddTask() {

    const [taskTitle, setTaskTitle] = useState('');
    const descriptionRef = useRef();
    const statusRef = useRef();

    const errorTaskTitle = useMemo(() => {
        if (!taskTitle.trim()) {
            return 'il campo non può essere vuoto'
        };
        if ([...taskTitle].some(char => symbols.includes(char))) {
            return 'non possono esserci caratteri speciali'
        };
        return '';
    }, [taskTitle])

    const handleSubmit = e => {
        e.preventDefault();
        if (errorTaskTitle)
            return;

        const newTask = {
            title: taskTitle.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        console.log('task da aggiungere', newTask)

        setTaskTitle('');
        descriptionRef.current.value = '';
        statusRef.current.value = 'To Do';
    }

    return (
        <>
            <h2>Aggiungi tasks</h2>
            <form
                className="add-task-form"
                onSubmit={handleSubmit}
            >
                <label className="form-label">
                    Nome task:
                    <input type="text"
                        className="form-input"
                        value={taskTitle}
                        onChange={e => setTaskTitle(e.target.value)} />
                </label>
                {errorTaskTitle && <p style={{ color: 'red', margin: 0 }}>{errorTaskTitle}</p>}

                <label className="form-label">
                    Descrizione:
                    <input type="text"
                        className="form-input"
                        ref={descriptionRef} />
                </label>

                <label className="form-label">
                    Stato:
                    <select className="form-input"
                        ref={statusRef}
                        defaultValue={'To Do'}>
                        <option value="To Do">To Do</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </label>

                <button type="submit"
                    className="form-button"
                    disabled={errorTaskTitle}>Aggiungi Task</button>
            </form>
        </>
    )
}