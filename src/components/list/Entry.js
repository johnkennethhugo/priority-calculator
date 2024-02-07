function Entry(entry) {
    return (
        <tr className="list-item">
            <td>{entry.data.pl}</td>
            <td>{entry.data.name}</td>
            <td>{entry.data.type}</td>
            <td>{entry.data.priority}</td>
            <td>{entry.data.date_created}</td>
            <td>{entry.data.escalated}</td>
            <td>{(entry.data.sla_breached)?"Yes":"No"}</td>
            <td>
                {/* <button>Edit</button> */}
                <button onClick={() => entry.onDeleteEntry(entry.data.id)}>Delete</button>
            </td>
        </tr>
    );
}

export default Entry;