import { ReactComponent as GithubIcon } from 'assets/img/Github.svg';
import './styles.css';

function Navbar(){

    return (
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1><a href = "/"> DSMovie</a></h1>
                <a href="https://github.com/thrysk" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">/thrysk</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );

}

export default Navbar;