import './Logo.css';
import logo from '../../assets/svg/Logo.svg';

function Logo() {
    return (
        <div>
            <a href className='logo'>
                <img src={logo} alt="logo" />
            </a>
        </div>
    );
}
export default Logo;


