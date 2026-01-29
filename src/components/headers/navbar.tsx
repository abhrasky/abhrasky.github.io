import { menuData, MenuItemDataType } from "@/db/menuData";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";

function Navbar() {
    const pathName = useLocation().pathname
    const [data, setData] = useState<MenuItemDataType[]>([])
    useEffect(() => {
        if (pathName === '/home-one-single' || pathName === '/home-two-single' || pathName === '/home-three-single' || pathName === '/home-four-single') {
            setData(menuDataSingleHomePage)
        } else {
            setData(menuData)
        }
    })
    return (
        <ul>
            {data.map(({ link, title, megamenu, submenu }, index) => (
                <li key={index} className={`${megamenu ? 'menu-thumb' : ''} ${submenu ? 'has-dropdown' : ''} ${index === 0 ? 'active' : ''}`}>
                    <Link to={link}>
                        {title}{' '}
                        {
                            megamenu || submenu ? <i className="fas fa-angle-down" /> : ''
                        }
                    </Link>
                    {
                        megamenu?.length &&
                        <ul className="submenu has-homemenu">
                            <li className="homemenu-items">
                                {
                                    megamenu.map(({ image, links, title }, index) => (
                                        <div key={index} className="homemenu">
                                            <div className="homemenu-thumb">
                                                <img src={image} alt="img" />
                                                <div className="demo-button">
                                                    {
                                                        links.map(({ link, title }, ind) => (
                                                            <Link key={ind} to={link} className="theme-btn">
                                                                <span>{title}</span>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="homemenu-content text-center">
                                                <h4 className="homemenu-title">
                                                    {title}
                                                </h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </li>
                        </ul>
                    }
                    {
                        submenu?.length &&
                        <ul className="submenu">
                            {
                                submenu.map((dropdown, ind) => {
                                    return (
                                        <Fragment key={ind}>
                                            {
                                                dropdown.submenu ?
                                                    <li className="has-dropdown">
                                                        <Link to="#">
                                                            {dropdown.title}
                                                            {' '}<i className="fas fa-angle-down" />
                                                        </Link>
                                                        <ul className="submenu">
                                                            {
                                                                dropdown.submenu.map((subDropdown, index) =>
                                                                    <li key={index}><Link to={subDropdown.link}>{subDropdown.title}</Link></li>
                                                                )
                                                            }
                                                        </ul>
                                                    </li>
                                                    :
                                                    <li ><Link to={dropdown.link}>{dropdown.title}</Link></li>
                                            }
                                        </Fragment>
                                    )
                                })
                            }
                        </ul>
                    }
                </li >
            ))
            }
        </ul >
    );
}

export default Navbar;