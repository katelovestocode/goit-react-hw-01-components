import user from '../utils/user.json'
import data from '../utils/data.json'
import friendsList from "../utils/friends.json"
import transactions from "../utils/transactions.json"
import { Profile } from 'components/Profile/Profile';
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from 'components/FriendsList/FriendsList';
import {TransactionHistory} from "components/TransactionHistory/TransactionHistory"


export const App = () => {
  return (<>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />

<FriendList friends={friendsList} />;
    
<TransactionHistory items={transactions} />;
  
  </>


  );
};
