import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Link to='#' className="search-trigger search-icon" onClick={toggleSearch}>
                <i className="fal fa-search" />
            </Link>
            <div className="search-wrap" style={{display:isOpen?'block':'none'}}>
                <div className="search-inner">
                    <i className="fas fa-times search-close" id="search-close" onClick={toggleSearch} />
                    <div className="search-cell">
                        <form method="get">
                            <div className="search-field-holder">
                                <input type="search" className="main-search-input" placeholder="Search..." />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPopup;