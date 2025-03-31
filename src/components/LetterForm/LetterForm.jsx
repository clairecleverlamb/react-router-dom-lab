import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LetterForm.css';

function LetterForm({ mailboxes, addLetter }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <div className='letter-form'>
        <h2>
            New Letter
        </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="mailboxId">Mailbox: </label>
                <select 
                    name="mailboxId" 
                    id="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a mailbox</option>
                    {mailboxes.map((mailbox) => (
                        <option key={mailbox._id} value={mailbox._id}>
                            Mailbox {mailbox._id}
                        </option>
                    ))}             
                </select>
            </div>
            <div>
            <label htmlFor="recipient">Recipient:</label>
            <input
                id="recipient"
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type='submit'>Send Letter</button>
        </form>
    </div>
  );
}


export default LetterForm;