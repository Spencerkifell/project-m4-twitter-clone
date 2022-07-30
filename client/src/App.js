import React from 'react';
import GlobalStyles from './components/GlobalStyles';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookmarks } from './components/Bookmarks/Bookmarks';
import { HomeFeed } from './components/HomeFeed/HomeFeed';
import { Notifications } from './components/Notifications/Notifications';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TweetDetails } from './components/Tweet/TweetDetails/TweetDetails';
import { CurrentUserContext } from './components/CurrentUserContext';

export const App = () => {
  const { status, currentUser } = React.useContext(CurrentUserContext);

  return (
    <>
      <div className='grid grid-cols-6 grid-rows-1'>
        <GlobalStyles />
        { status === 'idle' ? (
        <Router>
          <div/>
          <div>
            <Sidebar/>
          </div>
          <div className='col-span-3 border-r-2 min-h-screen h-full'>
            <Routes>
              <Route path='/' element={<HomeFeed/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/bookmarks" element={<Bookmarks/>} />
              <Route path="/tweet/:id" element={<TweetDetails/>} />
              <Route path="/profile/:profileId" element={<Profile/>} />
            </Routes>
          </div>
          <div/>
        </Router>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
};