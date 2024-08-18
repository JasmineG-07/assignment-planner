import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import NotesPage from './components/NotesPage';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';
import Footer from './components/Footer';
import Header from './components/Header';


import './App.css';

function App() {
  const [assignments, setAssignments] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const upcomingAssignments = assignments.filter(assignment => {
      const dueDate = new Date(assignment.dueDate);
      const now = new Date();
      const diffTime = dueDate - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 3 && diffDays > 0;
    });

    if (upcomingAssignments.length > 0) {
      upcomingAssignments.forEach(assignments => {
        new Notification("Assignment Due Soon", {
          body: `The assignment "${assignments.title}" is due on ${assignments.dueDate}`,
        });
      });
    }
  }, [assignments]);

  const addAssignment = (assignment) => {
    setAssignments([...assignments, assignment]);
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  const editAssignment = (id, newTitle, newDueDate, newPriority, newCategory) => {
    setAssignments(
      assignments.map((assignment)=> 
      assignment.id === id
    ? {...assignment, title: newTitle, dueDate: newDueDate, priority: newPriority, category: newCategory}
  : assignment
     )
    );
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark-mode' : ''}>
        <Header/>
        <div className='DarkMode'>
         <button onClick={toggleDarkMode}>◐</button> 
         </div>
        <main>
        <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/assignments" element={
    <>
      <AssignmentForm addAssignment={addAssignment} />
      <AssignmentList 
        assignments={assignments} 
        deleteAssignment={deleteAssignment} 
        editAssignment={editAssignment} 
      />
    </>
  } />
  <Route path="/notes" element={<NotesPage />} />
</Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;