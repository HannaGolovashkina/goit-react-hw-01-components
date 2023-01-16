import user from "./Profile/user.json";
import Section from "./Section/Section";
import Profile from "./Profile/Profile";

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

    </div>
  );
};
