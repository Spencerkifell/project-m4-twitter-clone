import React from 'react';
import styled from "styled-components";
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Bookmarks } from './components/Bookmarks/Bookmarks';
import { HomeFeed } from './components/HomeFeed/HomeFeed';
import { Notifications } from './components/Notifications/Notifications';
import { Profile } from './components/Profile/Profile';
import { TweetDetails } from './components/TweetDetails/TweetDetails';
import { Sidebar } from './components/Sidebar/Sidebar';

export const App = () => {
  return (
    <>
      <Page>
        <GlobalStyles />
        <Router>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<HomeFeed/>} />
            <Route path="/notifications" element={<Notifications/>} />
            <Route path="/bookmarks" element={<Bookmarks/>} />
            <Route path="/tweet/:id" element={<TweetDetails/>} />
            <Route path="/profile/:profileId" element={<Profile/>} />
          </Routes>
        </Router>
      </Page>
    </>
  )
};

const Page = styled.div`
  display: flex;
`;
