import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { COLORS } from './constants';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import { Bookmarks } from './components/Bookmarks/Bookmarks';
import { HomeFeed } from './components/HomeFeed/HomeFeed';
import { Notifications } from './components/Notifications/Notifications';
import { Profile } from './components/Profile/Profile';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Tweet } from './components/Tweet/Tweet';
import { CurrentUserContext } from './components/CurrentUserContext';

export const App = () => {
  const { status, currentUser } = React.useContext(CurrentUserContext);

  return (
    <>
    { status === 'idle' ? (
      <div className='grid grid-cols-9 grid-rows-1'>
        <GlobalStyles />
        <Router>
          <div/>
          <div className='col-span-2'>
            <Sidebar/>
          </div>
          <div className='col-span-5 border-r-2 min-h-screen h-full'>
            <Routes>
              <Route path='/' element={<HomeFeed/>} />
              <Route path="/notifications" element={<Notifications/>} />
              <Route path="/bookmarks" element={<Bookmarks/>} />
              <Route path="/tweet/:id" element={<Tweet/>} />
              <Route path="/:profileId" element={<Profile/>} />
            </Routes>
          </div>
          <div/>
        </Router>
      </div>
    ) : (
        <div className='flex justify-center h-screen items-center'>
          <Oval 
            height={100} 
            width={100} 
            strokeWidth={3}
            strokeWidthSecondary={5}
            color={COLORS.primary} 
            secondaryColor='#616366' 
            ariaLabel='Loading...' 
          />
        </div>
    )}
    </>
  )
};