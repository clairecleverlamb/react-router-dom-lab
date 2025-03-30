import { useParams } from "react-router";

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
    (mbox) => mbox._id === parseInt(mailboxId)
    );

    if(!mailboxId) return <h2>Mailbox Not Found</h2>;

    return (
        <>
          <h2>Mailbox Details</h2>
          <dl>
            <dt>Box Number: </dt>
            <dd>{selectedBox._id}</dd>
            <dt>Owner: </dt>
            <dd>{selectedBox.boxOwner}</dd>
            <dt>Size: </dt>
            <dd>{selectedBox.boxSize}</dd>
          </dl>
        </>
    );
};

export default MailboxDetails;