import React, { useState} from 'react';

function AssignmentForm({addAssignment}){
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [category, setCategory] = useState('General');


    const handleSubmit = (e) => {
        e.preventDefault();
        addAssignment({
            id: Date.now(),
            title,
            dueDate,
            priority,
            category,
        });
        setTitle('');
        setDueDate('');
        setPriority('Low');
        setCategory('General');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Assignment Title</label>
                <input
            type="text"
            placeholder="Assignemnt Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            </div>
            <div>
                <label htmlFor="duedate">Due Date</label>
            <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange = {(e)=> setDueDate(e.target.value)}
            required
            />
            </div>
            <div>
                <label htmlFor="priority">Priority</label>
            <select value={priority} id="priority"onChange={(e) => setPriority(e.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            </div>
            <div>
                <label htmlFor="category">Category</label>
            <select value={category} id="category" onChange={(e)=> setCategory(e.target.value)}>
                <title>Category</title>
                <option value="General">General</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="History">History</option>
                <option value="Geography">Geography</option>
                <option value="Other">Other</option>
            </select>
            </div>
            <button type="submit">Add Assignment</button>
        </form>
    );
}

export default AssignmentForm;