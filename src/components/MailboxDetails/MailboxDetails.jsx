import { useParams } from "react-router-dom";
import './MailboxDetails.css';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
      (mbox) => mbox._id === parseInt(mailboxId)
    );

    if(!mailboxId) return <h2 className="not-found">Mailbox Not Found!</h2>;

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
        </div>
    );
};

export default MailboxDetails;