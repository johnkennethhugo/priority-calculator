import '../../styles/List.css';
import Entry from './Entry.js';

function List(list) {

    const onDeleteEntry = (e) =>{
        list.onDeleteEntry(e);
    }

    return (
        <div className="list-container">
            <br/><br/><br/><br/>
            <table className="list-table">
                <thead className="list-table-head">
                    <tr>
                        <td>Priority Level</td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Priority</td>
                        <td>Created</td>
                        <td>Escalated</td>
                        <td>SLA Breached</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody> 
                {list.data.sort((a, b) => a.pl - b.pl).map((entry) => (
                    <Entry key={entry.id} data={entry} onDeleteEntry={onDeleteEntry}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default List;