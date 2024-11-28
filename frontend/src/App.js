import react from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from './Components/RegisterPage.js';
import { LoginPage } from './Components/LoginPage.js';
import { Searchbar } from './Components/Searchbar.js';
// import {NoteForm} from './Components/NoteForm.js'
import { Notes } from './Components/Notes.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/note' element={< Notes/>} />
      </Routes>
    </Router>
  );
}

export default App;
