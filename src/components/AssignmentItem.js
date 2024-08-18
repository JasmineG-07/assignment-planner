import React, {useState} from 'react';

function AssignmentItem({ assignment, deleteAssignment, editAssignment}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(assignment.title);
    const [newDueDate, setNewDueDate] = useState(assignment.dueDate);
    const [newPriority, setNewPriority] = useState(assignment.priority);
    const [newCategory, setNewCategory] = useState(assignment.category);

    const handleEdit = () => {
        editAssignment(assignment.id, newTitle, newDueDate, newPriority, newCategory);
        setIsEditing(false);
    };
    const isDueSoon = () => {
        const currentdate = new Date();
        const dueDate = new Date(assignment.dueDate);
        const diffTime = dueDate - currentdate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays  <= 3;
    };

    return (
        <li style={{borderLeft: isDueSoon() ? '5px solid red' : '5px solid #28a745'}}>
        {isEditing ? (
            <div>
                <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
                />
                <select 
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                >
                  <option value="Low">Low</option>  
                  <option value="Medium">Medium</option>  
                  <option value="High">High</option>
                </select> 
                <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                >
                    <option value="General">General</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Other">Other</option>
                </select>
                <button onClick={handleEdit}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
        ) : (
            <div>
                <h3>{assignment.title}</h3>
                <p>Due: {assignment.dueDate}</p>
                <p>Priority: {assignment.category}</p>
                <p>Category; {assignment.category}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteAssignment(assignment.id)}>Delete</button>
            </div>
        )}
        </li>
    );
}
export default AssignmentItem;