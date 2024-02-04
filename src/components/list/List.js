import '../../styles/List.css';
const mockEntry = {
    name: "Test123",
    type: "INC",
    priority: 4,
    date_created: "12-12-12",
    escalated: "true"
}
function List() {
    return (
        <div className="list-container">
            <br/><br/><br/><br/>
            <table className="list-table">
                <thead>
                    <tr>
                        <td>Priority Level</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Priority</td>
                        <td>Created</td>
                        <td>Escalated</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="list-item">
                        <td>3</td>
                        <td>{mockEntry.name}</td>
                        <td>{mockEntry.type}</td>
                        <td>{mockEntry.priority}</td>
                        <td>{mockEntry.date_created}</td>
                        <td>{mockEntry.escalated}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr className="list-item">
                        <td>3</td>
                        <td>{mockEntry.name}</td>
                        <td>{mockEntry.type}</td>
                        <td>{mockEntry.priority}</td>
                        <td>{mockEntry.date_created}</td>
                        <td>{mockEntry.escalated}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    <tr className="list-item">
                        <td>3</td>
                        <td>{mockEntry.name}</td>
                        <td>{mockEntry.type}</td>
                        <td>{mockEntry.priority}</td>
                        <td>{mockEntry.date_created}</td>
                        <td>{mockEntry.escalated}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default List;