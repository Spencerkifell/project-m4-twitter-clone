import React from "react";

export const TweetContext = React.createContext(null);

export const TweetProvider = ({
      children,
      handle,
      displayName,
      avatarSrc,
      id,
      isLiked,
      isRetweeted,
      retweetFrom,
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
        retweetFrom: retweetFrom,
        media: media,
        numLikes: numLikes,
        numRetweets: numRetweets,
        status: status,
        timestamp: timestamp,
    }}>
      {children}
    </TweetContext.Provider>
  );
};