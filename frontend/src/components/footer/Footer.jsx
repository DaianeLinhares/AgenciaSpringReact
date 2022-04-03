import './Footer.css';
import { AiFillLinkedin } from 'react-icons/ai';

function Footer() {
   return (

      <footer className="Footer">

         <div className='container'>

            <p> &copy; Daiane Linhares Ferreia </p>
            <div>
               <a href="https://www.linkedin.com/in/daianelinhares/" target="_blank" rel="noreferrer">
                  <AiFillLinkedin />
               </a>
            </div>
         </div>

      </footer>
   );
}
export default Footer;

