import './header.scss'
import logo from '../../assets/Group 4260.png'

const Header = () => {
    return (
        <nav>
            <div className="row align-items-center">
                <div className="col-5">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-7">
                    <div className="row">
                        <div className="col-1 justify-content-center d-flex flex-column">
                            <p className="nav-item">Products</p>
                        </div>
                        <div className="col-2 justify-content-center d-flex flex-column">
                            <p className="nav-item">Pricing</p>
                        </div>
                        <div className="col-2 justify-content-center d-flex flex-column">
                            <p className="nav-item">Integration</p>
                        </div>
                        <div className="col-2 justify-content-center d-flex flex-column">
                            <p className="nav-item">Contact Us</p>
                        </div>
                        <div className="col-2 justify-content-center align-items-center d-flex flex-column">
                            <p className="nav-item">Sign In</p>
                        </div>
                        <div className="col-3 justify-content-center d-flex flex-column p-0">
                            <button className="header-button">Try it For Free</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;