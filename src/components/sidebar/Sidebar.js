import { useState, useEffect, useCallback } from 'react';
import '../../styles/Sidebar.css';

function Sidebar(sidebar) {
    const [id, setId] = useState(0);
    // const [pl, setPl] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [priority, setPriority] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [slaBreached, setSlaBreached] = useState(false);
    const [escalated, setEscalated] = useState('');
    const slaDaysWO = [60, 30, 8, 5];
    const slaDaysIn = [30, 15, 5, 1];

    const nameChangeHandler = (event) =>{
        setName(event.target.value);
    }
    const dateCreatedChangeHandler = (event) =>{
        setDateCreated(event.target.value);
    }

    const slaCalculator = useCallback(() => {
        const today = new Date();
        const date = new Date(dateCreated);
        const differenceInTime = today.getTime() - date.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        let day;
        if (type === 'Workorder'){
        switch (priority) {
            case 'Low':
            day = slaDaysWO[0];
            break;
            case 'Medium':
            day = slaDaysWO[1];
            break;
            case 'High':
            day = slaDaysWO[2];
            break;
            case 'Critical':
            day = slaDaysWO[3];
            break;
            default:
                day = 0;
        }} else {
        switch (priority) {
            case 'Low':
            day = slaDaysIn[0];
            break;
            case 'Medium':
            day = slaDaysIn[1];
            break;
            case 'High':
            day = slaDaysIn[2];
            break;
            case 'Critical':
            day = slaDaysIn[3];
            break;
            default:
                day = 0;
        }}
        const isSLABreached = differenceInDays > day;
        setSlaBreached(isSLABreached);
    });

    const levelCalculator = (data) => {
        console.log(data);
        const randomNumber = Math.floor(Math.random() * 8) + 1;//mock Prioritization Level
        const entry = {...data,
            pl: randomNumber
         };
        sidebar.onProceed(entry);
    };

    useEffect(() => {
        slaCalculator();
    }, [slaCalculator, type, priority, dateCreated]);

    const submitHandler = (event) =>{
        event.preventDefault();
        const userData = {
            id: id,
            name: name,
            type: type,
            priority: priority,
            date_created: dateCreated,
            escalated: escalated,
            sla_breached: slaBreached
        }
        userData.name === '' ||
        userData.type === '' ||
        userData.priority === '' ||
        userData.date_created === '' ||
        userData.escalated === '' ? 
            alert('Please input data')
            :
            levelCalculator(userData);
        
        setId(id+1);
        setName("");
        setType("");
        setPriority("");
        setDateCreated("");
        setEscalated("");
        setSlaBreached(false);
    }

    return (
        <div className="side-pane">
            <div className="side-pane-content">
                <form className="forms" onSubmit={submitHandler}>
                    <label htmlFor="namex">Name:</label><br/>
                    <input  type="Text"
                            id="namex" 
                            value={name}
                            onChange={nameChangeHandler}
                            required /> 
                    <br/><br/>

                    <p>Type:</p>
                    <input  type="button"
                            id='form-options'
                            value="Incident"
                            className={type === 'Incident' ? 'form-options-active' : 'form-options-inactive'}
                            onClick={e=>setType(e.target.value)}
                             />
                    <br/>
                    <input  type="button" 
                            id='form-options'
                            value="Workorder"
                            className={type === 'Workorder' ? 'form-options-active' : 'form-options-inactive'}
                            onClick={e=>setType(e.target.value)}
                             />
                    <br/><br/>

                    <p>Priority:</p>
                    <input  type="button" 
                            id='form-options'
                            value="Low"
                            className={priority === 'Low' ? 'form-options-active' : 'form-options-inactive'}            
                            onClick={e=>setPriority(e.target.value)}
                            />
                    <input  type="button" 
                            id='form-options'
                            value="Medium"    
                            className={priority === 'Medium' ? 'form-options-active' : 'form-options-inactive'}                         
                            onClick={e=>setPriority(e.target.value)}
                            />
                    <input  type="button" 
                            id='form-options'
                            value="High"       
                            className={priority === 'High' ? 'form-options-active' : 'form-options-inactive'}                      
                            onClick={e=>setPriority(e.target.value)}
                            />
                    <input  type="button" 
                            id='form-options'
                            value="Critical"  
                            className={priority === 'Critical' ? 'form-options-active' : 'form-options-inactive'}                           
                            onClick={e=>setPriority(e.target.value)}
                            />
                    <br/><br/>

                    <label htmlFor="date_created">Date Created:</label><br/>
                    <input  type="date"
                            id="date_created" 
                            value={dateCreated} 
                            className={dateCreated !== '' ? 'form-options-active' : 'form-options-inactive'}                          
                            onChange={dateCreatedChangeHandler}
                            required/>
                    <br/><br/>

                    <p>Is Escalated:</p>
                    <input  type="button" 
                            id='form-options'
                            value="Yes"        
                            className={escalated === 'Yes' ? 'form-options-active' : 'form-options-inactive'}                                                 
                            onClick={e=>setEscalated(e.target.value)}
                            />
                    <input  type="button"
                            id='form-options'
                            value="No"        
                            className={escalated === 'No' ? 'form-options-active' : 'form-options-inactive'}                                                  
                            onClick={e=>setEscalated(e.target.value)}
                            />
                    <br/><br/>

                    <input type="submit" id='form-submit'/>
                </form>
            </div>
        </div>
    );
}

export default Sidebar;