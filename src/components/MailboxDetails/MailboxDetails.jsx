import { useParams } from "react-router-dom";
import './MailboxDetails.css';


const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    console.log('Props:', props);
    console.log('Mailbox ID:', mailboxId);

    const selectedBox = props.mailboxes.find(
      (mbox) => mbox._id === parseInt(mailboxId)
    );
    const selectedLetter = (props.letters || []).filter(
        (letter) => letter.mailboxId === parseInt(mailboxId)
    );

    if(!selectedBox) return <h2 className="not-found">Mailbox Not Found!</h2>;

    return (
        <div className="mailbox-details">
          <h2>Mailbox Details</h2>
          <dl>
            <dt>Box Number: </dt>
            <dd>{selectedBox._id}</dd>
            <dt>Owner: </dt>
            <dd>{selectedBox.boxOwner}</dd>
            <dt>Size: </dt>
            <dd>{selectedBox.boxSize}</dd>
          </dl>
          <h2>Letters</h2>
          {selectedLetter.length === 0 ? (
            <p>No Letters yet</p>
          ): (
            <ul>
                {selectedLetter.map((letter, index) => (
                    <li key={index}>
                        <h4>To: {letter.recipient}</h4>
                        <p>{letter.message}</p>
                    </li>
                ))}
            </ul>
          )}
        </div>
    );
};

export default MailboxDetails;