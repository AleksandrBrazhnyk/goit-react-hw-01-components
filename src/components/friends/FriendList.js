import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";

import styles from "./Friends.module.css";

const FriendsList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map((friend) => {
      return (
        <FriendsListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      );
    })}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendsList;
