import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className='mario-nav'>
            <ul>
                <li>
                    <Link to='/'>
                      Home
                    </Link>
                </li>
                <li>
                    <Link to='/mailboxes'>
                      Mailboxes
                    </Link>
                </li>
                <li>
                    <Link to='/mailboxes/new'>
                       New Mailbox
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;