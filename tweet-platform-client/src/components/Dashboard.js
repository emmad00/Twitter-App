// src/Dashboard.js
import React from 'react';
import './Dashboard.css';

const tasks = [
    { id: 1, tweetUrl: "https://twitter.com/example1", engagement: "Like" },
    { id: 2, tweetUrl: "https://twitter.com/example2", engagement: "Retweet" },
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Your Tasks</h1>
            <div className="task-list">
                {tasks.map(task => (
                    <div key={task.id} className="task-card">
                        <p>{task.engagement} this tweet:</p>
                        <a href={task.tweetUrl} target="_blank" rel="noopener noreferrer">{task.tweetUrl}</a>
                        <button className="task-button">Complete Task</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
