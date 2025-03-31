import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import LetterForm from './components/LetterForm/LetterForm';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addMailbox = (newMailbox) => {
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (formData) => {
    setLetters((prevLetters) => [
      ...prevLetters, {
        mailboxId: Number(formData.mailboxId),
        recipient: formData.recipient,
        message: formData.message
      }
    ]);
  };

  return (
    <BrowserRouter>
      <div className='app-container'>
        <h1>Mailbox</h1>
        <NavBar />
        <Routes>
          <Route path='/' element=
             {<div className='welcome-container'>
              <h1>Welcome to Post Office</h1>
              </div>} 
          />
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
          <Route path='/mailboxes/new' element={<MailboxForm addMailbox={addMailbox} mailboxCount={mailboxes.length} />} />
          <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
          <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>} />
          <Route path='*' element={<h2>Whoops, something wrong!</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
