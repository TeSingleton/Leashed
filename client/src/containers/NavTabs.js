// refer to activity 24 in module 20

import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#login"
                onClick={() => handlePageChange('Login')}
                // Check to see if the currentPage is `Login`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
                >
                Login
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#messages"
                onClick={() => handlePageChange('Messages')}
                // Check to see if the currentPage is `Messages`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Messages' ? 'nav-link active' : 'nav-link'}
                >
                Messages
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#petupload"
                onClick={() => handlePageChange('PetUpload')}
                // Check to see if the currentPage is `PetUpload`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'PetUpload' ? 'nav-link active' : 'nav-link'}
                >
                Pet Upload
                </a>
            </li>
            <li className="nav-item">
                <a
                href="#profile"
                onClick={() => handlePageChange('Profile')}
                // Check to see if the currentPage is `Profile`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
                >
                Profile
                </a>
            </li>
        </ul>
    </div>
  );
}

export default NavTabs;
