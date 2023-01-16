import user from "./Profile/user.json";
import Section from "./Section/Section";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/data.json";
import FriendList from "./FriendList/FriendList"
import friends from "./FriendList/friends.json"

export const App = () => {
  return (
  <div>
      <Section title={"Task-1 'Social network profile'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title={"Task-2 'Statistics section'"}>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <Statistics stats={data} />
      </Section>

      <Section title={"Task-3 'Friend list'"}>
        <FriendList friends={friends} />
      </Section>
      
    </div>
  );
};
