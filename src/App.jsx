import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import { Routes, Route } from 'react-router';


function App() {
  const [mailbox, setMailbox] = useState([]);

  const addMailbox = (newMailbox) => {
    newMailbox._id = mailbox.length + 1; 
    setMailbox([...mailbox, newMailbox]);
  }
  return (
    <>
      <h1>Mailbox</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Welcome to Post Office</h2>} />
        <Route path='/mailboxes' element={<MailboxList mailbox={mailbox} />} />
        <Route path='/mailboxes/new' element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailbox={mailbox} />} />
        <Route path='*' element={<h2>Whoops, something wrong!</h2>} />
      </Routes>
    </>
  )
};

export default App
