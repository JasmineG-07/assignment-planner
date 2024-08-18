import React, { useState } from 'react';
import AssignmentItem from './AssignmentItem';

function AssignmentList({ assignments, deleteAssignment, editAssignment}){
    const [filter, setFilter] = useState('All');
    const [categoryFilter, setCategoryFilter] = useState('All');

    const filterAssignment = assignments.filter(assignment => {
        const priorityMatches = filter === 'All' || assignment.priority ===filter;
        const categoryMatches = categoryFilter === 'All' || assignments.category ===categoryFilter;
        return priorityMatches && categoryMatches;
    });
    return (
        <div>
            <div className="filters">
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="All">All Priorities</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
                    <option value ="All">All Categories</option>
                    <option value="General">General</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="History">History</option>
                    <option value="Geography">Geography</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <ul>
                {filterAssignment.map((assignment)=> (
                    <AssignmentItem
                    key={assignment.id}
                    assignment={assignment}
                    deleteAssignment={deleteAssignment}
                    editAssignment={editAssignment}
                    />
                ))}
            </ul>
        </div>
    );
}

export default AssignmentList;