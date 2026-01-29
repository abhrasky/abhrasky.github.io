import { Link } from "react-router-dom"
import Navbar from "./navbar"
import SearchPopup from "./searchPopup"
import useSticky from "@/hooks/useSticky"
import ExtraInfoOffcanvas from "./extraInfoOffcanvas"

const HeaderFour = () => {
    const [isSticky] = useSticky()
    return (
        <header>
            <div id="header-sticky" className={`header-4 ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="header-left">
                                <div className="logo">
                                    <Link to="/" className="header-logo">
                                        <img src="/img/logo/white-logo.svg" alt="logo-img" />
                                    </Link>
                                    <Link to="/" className="header-logo-2">
                                        <img src="/img/logo/black-logo.svg" alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="mean__menu-wrapper d-lg-block d-none">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                                <SearchPopup />
                                <div className="header-button">
                                    <Link to="/contact" className="theme-btn">
                                        <span>
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="header__hamburger d-lg-none my-auto">
                                    <ExtraInfoOffcanvas />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default HeaderFour