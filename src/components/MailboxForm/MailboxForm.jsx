import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MailboxForm.css'


const MailboxForm = ({ addMailbox, mailboxCount }) => {
    const [boxOwner, setBoxOwner] = useState('');
    const [boxSize, setBoxSize] = useState('Small');
    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newId = mailboxCount + 1;
        const newMailbox = { boxOwner, boxSize, _id: newId };
        addMailbox(newMailbox);
        setBoxOwner('');
        setBoxSize('Small');
        navigate('/mailboxes');
    };

    return (
        <main className='mailbox-form'>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Box Owner: </label>
                <input 
                    type="text"
                    id="boxOwner"
                    value={boxOwner}
                    onChange={(e) => setBoxOwner(e.target.value)}
                    required
                />
                <label htmlFor="boxSize">Box Size: </label>
                  <select 
                    id="boxSize"
                    value={boxSize} 
                    onChange={(e) => setBoxSize(e.target.value)}>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                <button type="submit">Add Mailbox</button>
            </form>
        </main>
    );
}

export default MailboxForm;
