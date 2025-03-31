import { Link } from 'react-router-dom';
import './MailboxList.css'

const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes);
    return (
        <div className='mailbox-list'>
          <h2>Mailbox List</h2>
          {mailboxes.length === 0 ? (
            <p>No Mailboxes yet!</p>
          ) : (
            <ul>
                {mailboxes.map((currentMailbox) => (
                    <div className='mailbox-item'>
                        <li key={currentMailbox._id}>
                            <Link to={`/mailboxes/${currentMailbox._id}`}>
                                {currentMailbox.boxOwner || 'Unnamed'} - Box #{currentMailbox._id}
                            </Link>
                        </li>
                    </div>
                ))}
            </ul>
          )}
        </div>
    );
};

export default MailboxList;