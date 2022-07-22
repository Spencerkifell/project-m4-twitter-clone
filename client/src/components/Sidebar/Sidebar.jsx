import React from "react";
import styled from "styled-components";
import Logo from "../../logo";

import { NavLink } from "react-router-dom";
import { home } from 'react-icons-kit/feather/home'
import { user } from 'react-icons-kit/feather/user'
import { bell } from 'react-icons-kit/feather/bell'
import { bookmark } from 'react-icons-kit/feather/bookmark'
import { Icon } from "react-icons-kit";
import { COLORS } from "../../constants";

export const Sidebar = () => {
  return (
    <StyledSidebar className="border-r-2">
        <Logo/>
        <>
            <NavigationLink to="/">
                <Icon icon={home} size={25} className="pr-3"/>
                Home
            </NavigationLink>
            <NavigationLink to="/profile/abc">
                <Icon icon={user} size={25} className="pr-3"/>
                Profile
            </NavigationLink>  
            <NavigationLink to="/notifications">
                <Icon icon={bell} size={25} className="pr-3"/>
                Notifications
            </NavigationLink>
            <NavigationLink to="/bookmarks">
                <Icon icon={bookmark} size={25} className="pr-3"/>
                Bookmarks
            </NavigationLink>
        </>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
    display: flex;
    height: 100vh;
    padding: 2vw;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    
    a {
        color: black;
        font-size: 20px;
        padding: 5px 10px;
        margin: 10px 0;
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        color: ${COLORS.primary};
        background-color: ${COLORS.background};
        border-radius: 100px;
    }
    
`;

const NavigationLink = styled(NavLink)`
    &.active {
        color: ${COLORS.primary};
    }
`;
