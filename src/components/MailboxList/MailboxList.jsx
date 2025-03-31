import { Link } from 'react-router-dom';
import './MailboxList.css'

const MailboxList = ({ mailboxes }) => {
    return (
        <div className='mailbox-list'>
          <h2>Mailbox List</h2>
          {mailboxes.length === 0 ? (
            <p>No Mailboxes yet!</p>
          ) : (
            <ul>
                {mailboxes.map((currentMailbox) => (
                        <li key={currentMailbox._id} className='mailbox-item'>
                            <Link to={`/mailboxes/${currentMailbox._id}`}>
                                {currentMailbox.boxOwner || 'Unnamed'} - Box #{currentMailbox._id}
                            </Link>
                        </li>
                ))}
            </ul>
          )}
        </div>
    );
};

export default MailboxList;