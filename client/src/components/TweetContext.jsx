import React from "react";
import moment from "moment";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({
    children,
    handle,
    displayName,
    avatarSrc,
    id,
    isLiked,
    isRetweeted,
    media,
    numLikes,
    numRetweets,
    status,
    timestamp
}) => {

  return (
    <TweetContext.Provider value={{
        handle: handle,
        displayName: displayName,
        avatarSrc: avatarSrc,
        id: id,
        isLiked: isLiked,
        isRetweeted: isRetweeted,
        media: media,
        numLikes: numLikes,
        numRetweets: numRetweets,
        status: status,
        timestamp: moment(timestamp).format("MMM Do")
    }}>
      {children}
    </TweetContext.Provider>
  );
};