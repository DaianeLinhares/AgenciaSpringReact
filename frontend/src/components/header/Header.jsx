import './Header.css';
import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';

function Header() {
    return (
        <header className="Header">
            <Navbar />
            <Logo />
        </header>
    );
}
export default Header;

