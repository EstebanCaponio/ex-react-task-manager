import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function TaskDetail() {
    const { id } = useParams();
    const { tasks } = useContext(GlobalContext);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <main>
                <h2 style={{ textAlign: "center" }}>task non trovata</h2>
            </main>
        );
    }

    const handleDelete = () => {
        console.log('task da eliminare', task.id);
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'to do':
                return 'status-todo';
            case 'doing':
                return 'status-doing';
            case 'done':
                return 'status-done';
            default:
                return '';
        }
    };

    return (
        <main>
            <div className="task-detail-card">
                <h1>Dettaglio Task:</h1>
                <p><strong>Titolo:</strong> {task.title}</p>
                <p><strong>Descrizione:</strong> {task.description}</p>
                <div className="task-status-line">
                    <p><strong>Stato:</strong></p>
                    <span className={`status-badge ${getStatusClass(task.status)}`}>{task.status}</span>
                </div>
                <p><strong>Data:</strong> {new Date(task.createdAt).toLocaleDateString()}</p>
                <button onClick={handleDelete} className="delete-button">Elimina</button>
            </div>
        </main>
    );
}