import React from 'react'
import styled from 'styled-components';
import moment from "moment";
import { COLORS } from '../../constants';
import { Icon } from "react-icons-kit";
import { pin } from 'react-icons-kit/entypo/pin'
import { calendar } from 'react-icons-kit/entypo/calendar'


export const ProfileHeader = (props) => {
    const { 
        bannerSrc, 
        avatarSrc, 
        displayName, 
        handle, 
        bio, 
        numFollowers, 
        numFollowing, 
        location, 
        joined 
    } = props.currentProfile

    return (
        <div className='text-justify'>
            <Banner src={bannerSrc} alt="banner"/>
            <Header>
                <Avatar>
                    { avatarSrc != null &&
                        <img src={avatarSrc} alt="avatar" className="rounded-full"/>
                    }
                </Avatar>
                <FollowButton>Follow</FollowButton>
            </Header>
            <UserInfo>
                <p className="text-xl font-bold">{ displayName }</p>
                <p className='text-md text-slate-600 mb-2'>@{ handle }</p>
                <p className='mb-2'>{ bio }</p>
                <div className='flex flex-row mb-2'>
                    { location != null &&
                        <>
                            <Icon icon={pin} size={18} className="mr-2"/> 
                            <p className='mr-6'>{ location }</p>
                        </>
                    }
                    <Icon icon={calendar} size={18} className="mr-2"/>
                    <p>Joined { moment(joined).format("MMMM YYYY") }</p>
                </div>
                <div className='flex flex-row'>
                    <p className='mr-6'><b>{ numFollowing }</b> Following</p>
                    <p><b>{ numFollowers }</b> Followers</p>
                </div>
            </UserInfo>
        </div>
    )
};

const UserInfo = styled.div`
    margin-top: 10px;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
`;

const Header = styled.div`
    position: relative;
`;

const Banner = styled.img`
    width: 100%;
    height: 14rem;
    background-color: ${COLORS.background};
`

const Avatar = styled.div`
    margin-top: -82px;
    margin-left: 1.25rem;
    width: 164px;
    height: 164px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: ${COLORS.primary};
`;

const FollowButton = styled.button`
    position: absolute;
    border: 2px solid ${COLORS.primary};
    border-radius: 100px;
    color: ${COLORS.primary};
    bottom:0;
    right: 0;
    margin: 1.25rem;
    margin-bottom: 0;
    padding: 0.5rem 1.5rem;
`;
