import React from 'react';

function HomePage() {
    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Welcome to PlanIt</h1>
                <p>Your all-in-one assignments planner.</p>
                <div className="home-buttons">
                    
                </div>
            </header>
            <section className="features">
                <h2>Features</h2>
                <div className="feature-item">
                    <p>Keep track of all your assignments in one place.</p>
                </div>
                <div className="feature-item">
                    <h3>Dark Mode</h3>
                    <p>Switch to dark mode for a comfortable viewing experience.</p>
                </div>
                <div className="feature-item">
                    <h3>Notifications</h3>
                    <p>Receive reminders for upcoming deadlines.</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;