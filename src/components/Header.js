import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Darkbutton from '../components/Darkbutton';

const Header = () => {

    return (
        <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
                <Link to="/"><i className="feather-zap text-success display2-size me-3 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">:Social:</span> </Link>
            </div>

            <form action="#" className="float-left header-search ms-3">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400"></i>
                    <input type="text" placeholder="Start typing to search.." className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg" />
                </div>
            </form>
            <NavLink to="#" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>
            <NavLink to="#" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500 "></i></NavLink>

            <span className="ms-auto"></span>
            <Darkbutton />
            <Link to="#" className="p-0 ms-3 menu-icon"><img src="http://sociala.uitheme.net/assets/images/profile-4.png" alt="user" className="w40 mt--1" /></Link>

            <nav className="navigation scroll-bar">
                <div className="container ps-0 pe-0">
                    <div className="nav-content">
                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                            <div className="nav-caption fw-600 font-xssss text-grey-500"><span>New Feeds</span></div>
                            <ul className="mb-1 top-content">
                                <li className="logo d-none d-xl-block d-lg-block"></li>
                                <li><Link to="#" className="nav-content-bttn open-font"><i className="feather-tv btn-round-md bg-blue-gradiant me-3"></i><span>Newsfeed</span></Link></li>
                                <li><Link to="#" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md bg-mini-gradiant me-3"></i><span>Friends</span></Link></li> 
                            </ul>
                        </div>

                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                            <div className="nav-caption fw-600 font-xssss text-grey-500"><span>Account Information</span></div>
                            <ul className="mb-1 top-content">
                                <li className="logo d-none d-xl-block d-lg-block"></li>
                                <li><Link to="#" className="nav-content-bttn open-font"><i className="feather-user btn-round-md bg-mini-gradiant me-3"></i><span>My Profile </span></Link></li>
                                <li><Link to="#" className="nav-content-bttn open-font"><i className="feather-lock btn-round-md bg-mini-gradiant me-3"></i><span>Logout</span></Link></li>    
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header