import React from "react";

import Container from "./components/container/Container";

import Profile from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

import FriendsList from "./components/friends/FriendList";
import friends from "./components/friends/friends.json";

import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json";

const App = () => {
  return (
    <Container>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" statisticalData={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
export default App;
