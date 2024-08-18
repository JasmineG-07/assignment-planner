import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard(){
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="dashboard-summary">
                <p>Quick overview of your assignment.</p>
                <div className="dashboard-buttons">
                    <Link to="/assignments" className="dashboard-button">View All Assignments</Link>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;