import React from "react";

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
            <td>{task.title}</td>
            <td>
                <span className={`status-badge ${getStatusClass(task.status)}`}>
                    {task.status}
                </span>
            </td>
            <td>{new Date(task.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});