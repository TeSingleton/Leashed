// refer to activity 24 in module 20

import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Messages from './pages/Messages';
import PetUpload from './pages/PetUpload';
import Profile from './pages/Profile';


export default function ProfileContainer() {
const [currentPage, setCurrentPage] = useState('Home');

// method to check for the value of `currentPage`. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
if (currentPage === 'Home') {
    return <Home />;
}
if (currentPage === 'Login') {
    return <Login />;
}
if (currentPage === 'Messages') {
    return <Messages />;
}
if (currentPage === 'PetUpload') {
    return <PetUpload />;
}
return <Profile />;
};

const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    {renderPage()}
  </div>
);
}

