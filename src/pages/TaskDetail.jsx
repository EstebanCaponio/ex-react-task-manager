import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal";

export default function TaskDetail() {
    const { id } = useParams();
    const { tasks, removeTask } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const task = tasks.find(t => t.id === parseInt(id));

    if (!task) {
        return (
            <main>
                <h2 style={{ textAlign: "center" }}>task non trovata</h2>
            </main>
        );
    }

    const handleDelete = async () => {
        try {
            // console.log('task da eliminare', task.id);
            await removeTask(task.id);
            alert('Task eliminata!');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
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
                <button onClick={() => setShowDeleteModal(true)} className="delete-button">Elimina</button>
                {/* modale di eliminazione */}
                <Modal
                    title='ELIMINAZIONE'
                    content={<p>Vuoi davvero eliminare questa task?</p>}
                    show={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDelete}
                    confirmText="Elimina"
                />
            </div>
        </main>
    );
}