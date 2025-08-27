import React from "react";
import { Link } from "react-router-dom";

export default React.memo(function TaskRow({ task }) {

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
        <tr>
            <td>
                <Link to={`/task/${task.id}`}>{task.title}</Link>
            </td>
            <td className="status-cell">
                <span className={`status-badge ${getStatusClass(task.status)}`}>
                    {task.status}
                </span>
            </td>
            <td style={{ textAlign: 'center' }}>
                {new Date(task.createdAt).toLocaleDateString()}
            </td>
        </tr>
    );
});