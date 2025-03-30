import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailbox) => {
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Mailbox</h1>
        <NavBar />
        <Routes>
          <Route path='/' element={<h1>Welcome to Post Office</h1>} />
          <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
          <Route path='/mailboxes/new' element={<MailboxForm addMailbox={addMailbox} mailboxCount={mailboxes.length} />} />
          <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
          <Route path='*' element={<h2>Whoops, something wrong!</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
