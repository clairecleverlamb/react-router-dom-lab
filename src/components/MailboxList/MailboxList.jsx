import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes);
    return (
        <>
          <h2>Mailbox List</h2>
          {mailboxes.length === 0 ? (
            <p>No Mailboxes yet!</p>
          ) : (
            <ul>
                {mailboxes.map((currentMailbox) => (
                    <li key={currentMailbox._id}>
                        <Link to={`/mailboxes/${currentMailbox._id}`}>
                            {currentMailbox.boxOwner || 'Unnamed'} - Box #{currentMailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
          )}
        </>
    );
};

export default MailboxList;