import './header.scss'
import logo from '../../assets/Group4260.png'
import logo2 from '../../assets/Group4260@2x.png'

const Header = () => {
    return (
        <nav>
            <div className="row align-items-center">
                <div className='col-4'>
                    {/* <img src={logo} alt="logo" srcSet={`${logo} 195w, ${logo2} 389w`} sizes="(max-width: 2048px) 195px,389px" /> */}
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col justify-content-center d-flex flex-column">
                            <p className="nav-item">Products</p>
                        </div>
                        <div className="col justify-content-center d-flex flex-column">
                            <p className="nav-item">Pricing</p>
                        </div>
                        <div className="col justify-content-center d-flex flex-column">
                            <p className="nav-item">Integration</p>
                        </div>
                        <div className="col justify-content-center d-flex flex-column">
                            <p className="nav-item">Contact Us</p>
                        </div>
                        <div className="col justify-content-center d-flex flex-column">
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