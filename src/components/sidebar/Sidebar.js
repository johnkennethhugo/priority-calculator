import '../../styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="side-pane">
            <div className="side-pane-content">
                <form className="forms" action="/submit_form" method="post">
                    <label for="type">Name:</label><br/>
                    <input  type="Text"
                            name="name" 
                            required /> 
                    <br/><br/>

                    <label for="type">Type:</label><br/>
                    <input  type="radio"
                            name="type" 
                            value="incident" 
                            required />
                    <label for="incident">Incident</label><br/>
                    <input  type="radio" 
                            name="type" 
                            value="workorder" 
                            required />
                    <label for="workorder">Workorder</label>
                    <br/><br/>

                    <label for="priority">Priority:</label><br/>
                    <input  type="radio" 
                            name="priority" 
                            value="low" 
                            required />
                    <label for="low">Low</label><br/>
                    <input  type="radio" 
                            name="priority" 
                            value="medium" 
                            required />
                    <label for="medium">Medium</label><br/>
                    <input  type="radio" 
                            name="priority" 
                            value="high" 
                            required />
                    <label for="high">High</label><br/>
                    <input  type="radio" 
                            name="priority" 
                            value="critical" 
                            required />
                    <label for="critical">Critical</label>
                    <br/><br/>

                    <label for="date_created">Date Created:</label><br/>
                    <input  type="date"
                            name="date_created" 
                            className="date-input" 
                            required />
                    <br/><br/>

                    <label for="escalated">Is Escalated:</label><br/>
                    <input  type="radio" 
                            name="escalated" 
                            value="yes" 
                            required />
                    <label for="yes">Yes</label><br/>
                    <input  type="radio" 
                            name="escalated" 
                            value="no" 
                            required />
                    <label for="no">No</label>
                    <br/><br/>

                    <input type="submit" value="Submit" />
                    <br/>
                    <input type="button" value="Clear" />
                </form>
            </div>
        </div>
    );
}

export default Sidebar;